import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Scale, ShieldCheck } from "lucide-react";
import logo from "@/assets/shakuntalam-logo-transparent.png";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      {
        title:
          "Refund, Reversal & Loan Cancellation Policy | Shankuntalam Securities",
      },
      {
        name: "description",
        content:
          "Policy for customer refunds, transaction reversals, excess repayments, erroneous charges, failed disbursements and loan cancellations.",
      },
      {
        property: "og:title",
        content:
          "Refund, Reversal & Loan Cancellation Policy | Shankuntalam Securities",
      },
      {
        property: "og:description",
        content:
          "Read the policy governing refunds, transaction reversals and loan cancellations across the Company's NBFC lending business.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>

          <img
            src={logo}
            alt="Shankuntalam Securities Private Limited"
            className="h-auto w-44 sm:w-52"
          />
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
          NBFC LENDING POLICY
        </div>

        <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Refund, Reversal &amp; Loan Cancellation Policy
        </h1>

        {/* <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          This policy establishes a standardised framework for processing
          customer refunds, transaction reversals, excess repayments,
          erroneous charges, failed disbursements and loan cancellations
          across the Company's lending products.
        </p> */}

        <div className="mt-12 space-y-10 text-base leading-8 text-foreground/85">
          {/* 1. Objective */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <BookOpen className="size-5 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                1. Objective
              </h2>
            </div>

            <p>
              To establish a standardised framework for processing customer
              refunds, transaction reversals, excess repayments, erroneous
              charges, failed disbursements and loan cancellations across the
              Company's lending products.
            </p>

            <p className="mt-4">
              The policy aims to ensure fair customer treatment, regulatory
              compliance, timely resolution, appropriate financial controls and
              complete auditability.
            </p>
          </section>

          {/* 2. Scope */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <ShieldCheck
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                2. Scope
              </h2>
            </div>

            <p>
              This policy applies exclusively to the Company's NBFC lending
              business and its customer transactions, including:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-primary">
              <li>Digital and offline personal loans.</li>
              <li>Short-Term Personal Loans (STPL).</li>
              <li>Secured and unsecured retail loans.</li>
              <li>Business and MSME loans.</li>
              <li>Loan foreclosure and closure-related refunds.</li>
              <li>
                Transactions processed through authorised payment service
                providers and lending service providers acting for the NBFC.
              </li>
            </ul>

            <div className="mt-5 rounded-lg border border-border bg-secondary p-4">
              <p className="font-semibold text-foreground">Exclusion</p>
              <p className="mt-1 text-sm leading-7 text-muted-foreground">
                This policy does not cover P2P lending platform operations or
                investor refunds.
              </p>
            </div>
          </section>

          {/* 3. Regulatory framework */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Scale className="size-5 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                3. Regulatory Framework
              </h2>
            </div>

            <p>
              The Company shall comply with applicable RBI requirements,
              including:
            </p>

            <ol className="mt-4 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-primary">
              <li>
                RBI (Non-Banking Financial Companies – Responsible Business
                Conduct) Directions, 2025.
              </li>
              <li>
                RBI (Digital Lending) Directions, 2025, where digital lending
                activities are undertaken.
              </li>
              <li>
                Applicable Key Facts Statement (KFS) requirements and Fair
                Practices Code.
              </li>
              <li>
                RBI directions on fair practices in charging interest, including
                correction of excess interest and other charges.
              </li>
              <li>
                Applicable payment-system rules, grievance-redressal
                requirements and other relevant statutory directions.
              </li>
            </ol>

            <div className="mt-5 rounded-lg border border-border bg-card p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p className="text-sm leading-7 text-muted-foreground">
                  The Compliance Department shall maintain the regulatory
                  applicability register and ensure that this policy is updated
                  for subsequent amendments.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Refund categories and treatment */}
          <section>
            <h2 className="mb-4 font-display text-2xl text-foreground sm:text-3xl">
              4. Refund Categories and Treatment
            </h2>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="border-b border-r border-border px-4 py-3 font-semibold">
                      Category
                    </th>
                    <th className="border-b border-border px-4 py-3 font-semibold">
                      Policy treatment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Duplicate repayment",
                      "Refund the verified duplicate payment.",
                    ],
                    [
                      "Excess repayment",
                      "Reconcile the loan account and refund the confirmed surplus.",
                    ],
                    [
                      "Incorrect processing fee or other charge",
                      "Reverse or refund the incorrectly collected amount.",
                    ],
                    [
                      "Failed disbursement",
                      "Verify the final bank/payment status and resolve any debit, credit or fee mismatch.",
                    ],
                    [
                      "Loan cancellation before disbursement",
                      "Cancel the applicable transaction and refund eligible amounts.",
                    ],
                    [
                      "Digital loan cooling-off exit",
                      "Process in accordance with applicable RBI requirements and the approved loan policy.",
                    ],
                    [
                      "Foreclosure or loan closure surplus",
                      "Reconcile the final dues and refund any confirmed excess.",
                    ],
                    [
                      "Incorrect repayment allocation",
                      "Correct the loan ledger and refund any resulting excess payment.",
                    ],
                    [
                      "Unauthorised or disputed payment",
                      "Investigate under applicable payment-dispute and fraud procedures.",
                    ],
                    [
                      "Partner-related fee error",
                      "Correct the customer account where required and separately resolve the partner settlement.",
                    ],
                  ].map(([category, treatment]) => (
                    <tr key={category} className="even:bg-secondary/40">
                      <td className="border-b border-r border-border px-4 py-3 font-medium">
                        {category}
                      </td>
                      <td className="border-b border-border px-4 py-3">
                        {treatment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Refund eligibility shall be determined using the transaction
              evidence, loan agreement, applicable disclosures and regulatory
              requirements. A refund must not be rejected merely because the
              loan account has been closed.
            </p>
          </section>

          {/* 5. Digital loan cooling-off period */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              5. Digital Loan Cooling-off Period
            </h2>

            <p>
              For digital loans covered by the RBI Digital Lending Directions,
              2025:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-primary">
              <li>
                The borrower shall receive an explicit option to exit during the
                cooling-off period.
              </li>
              <li>
                The period shall be determined under the approved loan policy
                and shall not be less than one day.
              </li>
              <li>
                The eligible exit settlement shall include principal and
                proportionate APR without penalty.
              </li>
              <li>
                A reasonable one-time processing fee may be retained only where
                permitted and disclosed upfront in the KFS.
              </li>
              <li>
                The Company shall process the request promptly and shall not use
                internal approval or processing timelines to restrict the
                borrower's regulatory entitlement.
              </li>
            </ul>

            <p className="mt-4">
              Requests outside the cooling-off period shall be governed by the
              loan agreement, applicable prepayment requirements and other
              relevant RBI directions.
            </p>
          </section>

          {/* 6. Refund turnaround time */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              6. Refund Turnaround Time (TAT)
            </h2>

            <div className="rounded-lg border border-border bg-secondary p-5">
              <p>
                The following are proposed internal service standards, subject
                to applicable statutory, regulatory and payment-system
                deadlines. Where external bank or payment-system action is
                required, the case shall remain open until resolution or an
                appropriately documented outcome is reached.
              </p>
              <p className="mt-4">
                The Company shall follow any shorter applicable regulatory
                deadline. Overdue cases shall be escalated to the Operations
                Head and Finance Head, with customer communication and
                documented reasons for delay.
              </p>
            </div>
          </section>

          {/* 7. End-to-end workflow */}
          <section>
            <h2 className="mb-4 font-display text-2xl text-foreground sm:text-3xl">
              7. End-to-End Workflow
            </h2>

            <div className="space-y-5">
              {[
                {
                  title: "Step 1: Request Registration",
                  intro:
                    "Operations or Customer Service shall register each request in the designated system, capturing:",
                  items: [
                    "Loan account ID and product.",
                    "Refund reason and requested amount.",
                    "Original transaction ID / UTR.",
                    "Request date and supporting evidence.",
                    "Assigned owner and target completion date.",
                  ],
                },
                {
                  title: "Step 2: Transaction Validation",
                  intro: "The Operations maker shall verify:",
                  items: [
                    "Actual debit or credit status.",
                    "Bank or payment gateway transaction records.",
                    "Loan ledger and outstanding dues.",
                    "Principal, interest, fees and taxes.",
                    "Any previous refund, reversal or adjustment.",
                    "Applicable loan agreement, KFS and cancellation conditions.",
                    "Customer identity and verified refund beneficiary.",
                  ],
                },
                {
                  title: "Step 3: Refund Calculation",
                  intro:
                    "The maker shall document the original payment, valid charges or dues, prior adjustments and net refundable amount. Cooling-off settlements shall follow Section 5.",
                },
                {
                  title: "Step 4: Approval",
                  intro:
                    "The request shall be routed to the appropriate approver under the approved delegation of authority. The maker and approver must be separate individuals.",
                },
                {
                  title: "Step 5: Payment Processing",
                  intro:
                    "The Operations team or an authorised payment team shall initiate the refund through an approved channel. Refunds should ordinarily be returned to the original source or a verified customer bank account, subject to applicable rules.",
                  extra:
                    "Third-party beneficiary payments shall not be permitted merely on the basis of an informal customer request.",
                },
                {
                  title: "Step 6: Ledger and Accounting Adjustment",
                  intro:
                    "Finance and Operations shall ensure that the refund is correctly reflected in the payment records, LMS and general ledger. Refunds must not be incorrectly classified as principal collections, interest income or fee income.",
                },
                {
                  title: "Step 7: Case Closure",
                  intro:
                    "The case shall be closed only after the transaction status, ledger adjustments, approval trail and supporting documents are complete.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2">{step.intro}</p>

                  {step.items && (
                    <ul className="mt-3 list-disc space-y-1 pl-6 marker:text-primary">
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {step.extra && <p className="mt-3">{step.extra}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* 8. Approval matrix */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              8. Approval Matrix
            </h2>

            <p className="mb-4">
              The following proposed limits shall become effective only after
              formal management approval.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-secondary">
                  <tr>
                    <th className="border-b border-r border-border px-4 py-3 font-semibold">
                      Refund amount / case type
                    </th>
                    <th className="border-b border-border px-4 py-3 font-semibold">
                      Minimum approval
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Up to ₹10,000", "Operations Manager"],
                    ["₹10,001–₹50,000", "Operations Head + Finance Manager"],
                    ["₹50,001–₹2,00,000", "Finance Head + Operations Head"],
                    ["Above ₹2,00,000", "CFO + authorised senior approver"],
                    [
                      "Suspected fraud or unauthorised transaction",
                      "Compliance / Fraud / Risk review, irrespective of amount",
                    ],
                    [
                      "Material policy exception",
                      "Compliance review and competent authority approval",
                    ],
                  ].map(([amount, approval]) => (
                    <tr key={amount} className="even:bg-secondary/40">
                      <td className="border-b border-r border-border px-4 py-3 font-medium">
                        {amount}
                      </td>
                      <td className="border-b border-border px-4 py-3">
                        {approval}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              The approval shall be based on the aggregate amount relating to
              the underlying transaction. Refunds must not be split to
              circumvent approval limits.
            </p>
          </section>

          {/* 9. Reconciliation and audit controls */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              9. Reconciliation and Audit Controls
            </h2>

            <p>The Company shall implement the following controls:</p>

            <ol className="mt-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary">
              <li>
                Daily reconciliation of refund transactions against
                bank/payment-system records.
              </li>
              <li>
                Matching of refunds with LMS entries and general-ledger
                adjustments.
              </li>
              <li>
                Separate tracking of pending, failed, returned and disputed
                refunds.
              </li>
              <li>
                Duplicate-refund checks using customer, loan, amount and
                transaction reference.
              </li>
              <li>Maker-checker approval and role-based system access.</li>
              <li>
                Documented approval for manual overrides and exceptional
                transactions.
              </li>
              <li>Monthly ageing analysis and root-cause reporting.</li>
              <li>
                Risk-based independent audit testing and corrective-action
                tracking.
              </li>
            </ol>

            <div className="mt-5 rounded-lg border border-border bg-secondary p-4">
              <p className="font-medium text-foreground">
                No refund shall be processed solely through an unsupported
                manual ledger adjustment.
              </p>
            </div>
          </section>

          {/* 10. Refund register and MIS */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              10. Refund Register and MIS
            </h2>

            <p>
              A central register shall capture the case ID, customer and loan
              details, product, reason, amount requested, amount approved,
              payment reference, maker, checker, transaction status, ledger
              adjustment, TAT, delay reason and closure date.
            </p>

            <p className="mt-4">The monthly MIS shall include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-primary">
              <li>Total refund cases and value.</li>
              <li>Completed, pending, failed and rejected cases.</li>
              <li>Cases beyond internal TAT.</li>
              <li>Product-wise and partner-wise trends.</li>
              <li>Duplicate payments and erroneous charges.</li>
              <li>Cooling-off exits.</li>
              <li>Exceptions, suspected fraud and root causes.</li>
            </ul>

            <p className="mt-4">
              Operations and Finance shall review the MIS monthly, with material
              exceptions escalated to senior management and Compliance.
            </p>
          </section>

          {/* 11. Customer complaints and escalation */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              11. Customer Complaints and Escalation
            </h2>

            <p>
              Refund-related complaints shall be handled under the Company's
              approved grievance-redressal framework.
            </p>

            <p className="mt-4">
              The Company shall acknowledge complaints, assign an accountable
              owner, maintain an audit trail and communicate the resolution.
              Customers shall be informed of the applicable escalation mechanism
              where required.
            </p>

            <p className="mt-4">
              The relevant RBI complaint mechanism and eligibility conditions
              shall be communicated in accordance with the applicable
              directions. Internal refund TATs shall not replace statutory
              complaint-resolution requirements.
            </p>
          </section>

          {/* 12. Rejections and exceptions */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              12. Rejections and Exceptions
            </h2>

            <p>
              A refund may be rejected only where documented evidence
              establishes that no refund is due under the applicable agreement,
              transaction records and regulatory requirements.
            </p>

            <p className="mt-4">
              The rejection record shall include the reason, supporting
              evidence, approver and customer communication. Cases involving
              unclear transaction status shall remain under investigation rather
              than being automatically rejected.
            </p>
          </section>

          {/* 13. Record retention */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              13. Record Retention
            </h2>

            <p>
              All refund requests, supporting documents, transaction references,
              calculations, approvals, customer communications, reconciliation
              records and audit findings shall be retained under the Company's
              approved retention schedule and applicable legal and regulatory
              requirements.
            </p>
          </section>

          {/* 14. Policy review and approval */}
          <section>
            <h2 className="mb-3 font-display text-2xl text-foreground sm:text-3xl">
              14. Policy Review and Approval
            </h2>

            <p>
              This policy shall be reviewed at least annually and whenever
              material regulatory or operational changes occur.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
