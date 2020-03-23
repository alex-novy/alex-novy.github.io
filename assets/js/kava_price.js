$(function() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=kava&vs_currencies=usd')
        .then(res => {
            return res.json();
        })
        .then(data => {
            $('#kava_price').html(data.kava.usd);
        })
});