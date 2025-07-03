let a = document.getElementById("amount");
let r = document.getElementById("rate");    
let t = document.getElementById("time");
let p = document.getElementById("result");
let i = document.getElementById("reset");

function calculateMonthlyPayment() {
    let am = parseFloat(a.value);
    let ra = parseFloat(r.value);
    let ti = parseFloat(t.value); 

    if (isNaN(am) || isNaN(ra) || isNaN(ti) || am <= 0 || ra < 0 || ti <= 0) {
        p.innerHTML = "Please enter valid values.";
        return;
    }

    let monthlyRate = ra / 100 / 12;
    let months = ti * 12;
    let payment = am * monthlyRate * (1 + monthlyRate)**months / ((1 + monthlyRate)**months - 1);
    let totalPayment = payment * months;
    let totalInterest = totalPayment - am;

    let schedule = [];
    let balance = am;
    for (let m = 1; m <= months; m++) {
        let interest = balance * monthlyRate;
        let principal = payment - interest;
        balance -= principal;
        if (balance < 0) balance = 0;
        schedule.push({
            month: m,
            payment: payment,
            principal: principal,
            interest: interest,
            balance: balance
        });
    }

    let scheduleHTML = `
        <h3 class="font-bold mt-4 mb-2">Amortization Schedule</h3>
        <div class="overflow-x-auto">
        <table class="min-w-full text-xs text-left border-collapse">
            <thead>
                <tr>
                    <th class="border px-2 py-1">Month</th>
                    <th class="border px-2 py-1">Payment</th>
                    <th class="border px-2 py-1">Principal</th>
                    <th class="border px-2 py-1">Interest</th>
                    <th class="border px-2 py-1">Balance</th>
                </tr>
            </thead>
            <tbody>
                ${schedule.map(row => `
                    <tr>
                        <td class="border px-2 py-1">${row.month}</td>
                        <td class="border px-2 py-1">$${row.payment.toFixed(2)}</td>
                        <td class="border px-2 py-1">$${row.principal.toFixed(2)}</td>
                        <td class="border px-2 py-1">$${row.interest.toFixed(2)}</td>
                        <td class="border px-2 py-1">$${row.balance.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        </div>
    `;

    p.innerHTML = `
        <div>Monthly Payment: <b>$${payment.toFixed(2)}</b></div>
        <div>Total Payment: <b>$${totalPayment.toFixed(2)}</b></div>
        <div>Total Interest: <b>$${totalInterest.toFixed(2)}</b></div>
        ${scheduleHTML}
    `;
}

function updateDisplay() {
    a.value = "";
    r.value = "";
    t.value = "";
    p.innerHTML = "";
}

a.addEventListener("input", calculateMonthlyPayment);
r.addEventListener("input", calculateMonthlyPayment);
t.addEventListener("input", calculateMonthlyPayment);
i.addEventListener("click", updateDisplay);