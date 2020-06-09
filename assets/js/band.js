function emultiplyBy()
{
        num1 = document.getElementById("band_amount_calc").value;
        num2 = document.getElementById("band_comission_calc").value;
        num3 = 0.13;
        num4 = 100;
        num5 = 365;
        num6 = 12;
        daily = num1 * num3 / num5 - num2 / num4 * num1 * num3 / num5;
        daily_rewards = daily;

        document.getElementById("band_daily").innerHTML = daily_rewards;
        document.getElementById("band_monthly").innerHTML = num1 * num3 / num6 - num2 / num4 * num1 * num3 / num6;
        document.getElementById("band_yearly").innerHTML = num1 * num3 - num2 / num4 * num1 * num3;
}

$(function() {
    function update() {
        fetch('https://api-wm-lb.bandchain.org/staking/validators/bandvaloper1unfg2zhnssl07tql8d85zc6rx7zsfs5qh206av')
        .then(res => {
            return res.json();
        })
        .then(data => {
            $('#band_block').html(data.height);
            $('#band_operator').html(data.result.operator_address);
            $('#band_tokens').html(data.result.tokens.slice(0,-6));
            $('#band_moniker').html(data.result.description.moniker);
            $('#band_comission').html(data.result.commission.commission_rates.rate.slice(2,-16));
        });
    }
    setInterval(update, 3000);
  update();
});

$(function() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=band-protocol&vs_currencies=usd')
    .then(res => {
        return res.json();
    })
    .then(data => {
        $('#band_price').html(data.band-protocol.usd);
    })
});