
$.ajax({
    url: "https://kava-relay.01node.com/staking/validators/kavavaloper1k760ypy9tzhp6l2rmg06sq4n74z0d3rejwwaa0",
  }).done(function(data) {
    $('#monitor_data').append(JSON.stringify(data))
  });
