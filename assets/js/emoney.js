function emultiplyBy()
{
        num1 = document.getElementById("emoney_amount_calc").value;
        num2 = document.getElementById("emoney_comission_calc").value;
        num3 = 0.01;
        num4 = 100;
        num5 = 365;
        num6 = 12;
        daily = num1 * num3 / num5 - num2 / num4 * num1 * num3 / num5;
        daily_rewards = daily;

        document.getElementById("emoney_daily").innerHTML = daily_rewards;
        document.getElementById("emoney_monthly").innerHTML = num1 * num3 / num6 - num2 / num4 * num1 * num3 / num6;
        document.getElementById("emoney_yearly").innerHTML = num1 * num3 - num2 / num4 * num1 * num3;
}

$(function() {
        function update() {
            fetch('https://emoney.validator.network/light/staking/validators/emoneyvaloper1q2kc675fw536jq74f6ekwae2pr5pksued2k80s')
            .then(res => {
                return res.json();
            })
            .then(data => {
                $('#emoney_block').html(data.height);
                $('#emoney_operator').html(data.result.operator_address);
                $('#emoney_tokens').html(data.result.tokens.slice(0,-6));
                $('#emoney_moniker').html(data.result.description.moniker);
                $('#emoney_comission').html(data.result.commission.commission_rates.rate.slice(2,-16));
            });
        }
        setInterval(update, 7000);
      update();
});

/*
$(function() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=NGM&vs_currencies=usd')
        .then(res => {
            return res.json();
        })
        .then(data => {
            $('#emoney_price').html(data.ngm.usd);
        })
});
*/
