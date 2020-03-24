function multiplyBy()
{
        num1 = document.getElementById("kava_amount_calc").value;
        num2 = document.getElementById("kava_comission_calc").value;
        num3 = 0.075;
        num4 = 100;
        num5 = 365;
        num6 = 12;
        daily = num1 * num3 / num5 - num2 / num4 * num1 * num3 / num5;
        daily_rewards = daily;

        document.getElementById("kava_daily").innerHTML = daily_rewards;
        document.getElementById("kava_monthly").innerHTML = num1 * num3 / num6 - num2 / num4 * num1 * num3 / num6;
        document.getElementById("kava_yearly").innerHTML = num1 * num3 - num2 / num4 * num1 * num3;
}
