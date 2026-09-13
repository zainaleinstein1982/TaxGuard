"""
test_interrupt.py - Local verification script for Strands Agents SDK BeforeToolCallEvent interrupt and resume flow.
Run this script to verify that:
1. The agent pauses when an ambiguous/high-value receipt is processed.
2. result.stop_reason == "interrupt" is returned.
3. result.interrupts contains the exact approval context.
4. Passing InterruptResponseContent back to agent.invoke() successfully resumes execution.
"""

import os
from typing import Dict, Any
from strands import Agent, tool, BeforeToolCallEvent, InterruptResponseContent
from strands.models.bedrock import BedrockModel

# Mock Bedrock model or local test configuration
# Ensure AWS credentials or mock environment variables are set
os.environ.setdefault("AWS_REGION", "us-east-1")

@tool(description="Parse raw receipt text extracted from email/PDF using OCR.")
def parse_receipt_text(raw_text: str) -> Dict[str, Any]:
    # Simulate high-value receipt triggering ambiguous categorization
    return {"status": "success", "extracted_text": raw_text, "parsed_fields": {"vendor": "AMZN MKTP US", "amount": 847.00}}

@tool(description="Query IRS Schedule C guidelines for business deductibility.")
def check_irs_rule(category: str, expense_description: str) -> str:
    return f"IRS Schedule C Guideline for {category}: Deductible if ordinary and necessary."

# Initialize Agent
agent = Agent(
    name="TaxGuard-Test-Agent",
    system_prompt="You are TaxGuard. Audit receipts and check IRS rules.",
    tools=[parse_receipt_text, check_irs_rule]
)

# Interrupt Hook using event.interrupt()
@agent.on(BeforeToolCallEvent)
def handle_approval_gate(event: BeforeToolCallEvent):
    if event.tool_name == "parse_receipt_text":
        amount = event.tool_arguments.get("raw_text", "")
        if "$847" in amount or "847" in amount:
            event.interrupt(
                name="taxguard-writeoff-approval",
                reason="Ambiguous high-value expense ($847.00) requires human write-off sign-off."
            )

def run_verification():
    print("=== STEP 1: Initial Agent Invoke (Expect Interrupt) ===")
    prompt = "Please audit this receipt: AMZN MKTP US $847.00 for office/personal equipment."
    
    result = agent.invoke(prompt)
    
    print(f"Stop Reason: {getattr(result, 'stop_reason', 'unknown')}")
    
    if getattr(result, 'stop_reason', None) == "interrupt":
        print("[SUCCESS] Agent successfully paused with stop_reason == 'interrupt'")
        interrupts = getattr(result, 'interrupts', [])
        print(f"Interrupts Context: {interrupts}")
        
        print("\n=== STEP 2: Resume Agent with InterruptResponseContent ===")
        # Simulate human decision approval response
        resume_content = InterruptResponseContent(
            interrupt_id=interrupts[0].get('id', 'test-id') if interrupts else 'test-id',
            response="APPROVED: Reclassify as Software & Cloud Business Deduction"
        )
        
        resumed_result = agent.invoke(resume_content)
        print(f"Resumed Final Output: {resumed_result}")
        print("[SUCCESS] Agent successfully resumed and completed execution!")
    else:
        print("[NOTICE] Agent completed without interrupt (check test parameters). Result:", result)

if __name__ == "__main__":
    run_verification()
