const Discord = require("discord.js");

module.exports = async(bot, message, args) => {
	message.channel.sendEmbed(new Discord.RichEmbed().setColor("#007FFF").setTitle("List of Commands")
		.setDescription("For more information, use `>info`.")
		.addField(">dial / >call", "Dial a number using your own number")
		.addField(">rdial / >rcall", "Dial a random number in the phonebook (*411)")
		.addField(">wizard", "Get yourself a number")
		.addField(">mailbox", "Check your number's mailbox, plus constious settings")
		.addField(">suggest", "Suggest something to be added to the bot")
		.addField(">convert", "Convert your credits into other bot currency via [Discoin](http://discoin.gitbooks.io/docs)")
		.addField("Other commands about money", "`>daily`, `>lottery`")
		.addField("You probably know how these commands work", "`>invite`, `>info`"));
};