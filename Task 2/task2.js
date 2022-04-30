const formulatePayment = (choice, amount) => {
    const initialPayment = ((10 / 100) * amount).toFixed(2);
    const remainingTotal = amount - initialPayment;
    if (choice == 'weekly')
    {
        let weeklyAmountPayment = 0;
        let weekly = remainingTotal / weeklyAmountPayment;
        while (weekly > 156) {
            weeklyAmountPayment = weeklyAmountPayment + 50;
            let weeks = remainingTotal / weeklyAmountPayment;
            if (weeks % 50 !== 0)
            {
                weekly = Math.ceil(weeks);
            }
        }
        console.log(`You will be paid ${weeklyAmountPayment} for ${weekly} weeks.`);
        return { time: weekly, amount: weeklyAmountPayment };
    } 
    
    else if (choice == 'monthly') 
    {
        let monthlyPrice = 0;
        let monthly = remainingTotal / monthlyPrice;
        while (monthly > 36) {
            monthlyPrice = monthlyPrice + 100;
            let months = remainingTotal / monthlyPrice;
            if (months % 100 !== 0) {
               monthly = Math.ceil(months);
            }
        }
        console.log(`You will be paid ${monthlyPrice} for ${monthly} months.`);
        return { time: monthly, amount: monthlyPrice };
        }
        
    else {
        return null;
    }
   };
   