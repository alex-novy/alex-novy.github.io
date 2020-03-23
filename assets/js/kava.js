
$(function() {
    function update() {
        fetch('https://kava-relay.01node.com/staking/validators/kavavaloper1k760ypy9tzhp6l2rmg06sq4n74z0d3rejwwaa0')
        .then(res => {
            return res.json();
        })
        .then(data => {
            $('#kava_block').html(data.height);
            $('#kava_operator').html(data.result.operator_address);
            $('#kava_tokens').html(data.result.tokens.slice(0,-6));
            $('#kava_moniker').html(data.result.description.moniker);
            $('#kava_comission').html(data.result.commission.commission_rates.rate.slice(2,-16));
        });
    }
    setInterval(update, 7000);
  update();
});