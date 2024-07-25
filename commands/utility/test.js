const { CommandInteraction, AttachmentBuilder } = require("discord.js");
const { GreetingsCard } = require("./../../utility/GreetingsCard")


module.exports.data = {
    name: "test",
    description: "Xem test command",
    type: 1,
    options: [],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
}
/**
 * 
 * @param { CommandInteraction } interaction 
 */
module.exports.execute = async (interaction) => {

    // create card
    const card = new GreetingsCard()
        .setAvatar(interaction.user.displayAvatarURL({ size: 1024, forceStatic: true, extension: "png" }))
        .setDisplayName(interaction.user.username)
        .setImage("https://cdn.discordapp.com/attachments/1150638982682652722/1265890654572118048/pngtree-free-vector-watercolor-galaxy-poster-background-template-picture-image_1055747.png?ex=66a3280b&is=66a1d68b&hm=2877d5d661892c3b5ee33d4d9fad651c7e463bb743a33b24c27c81a0ed5eb77e&")
        .setType("welcome")
        .setMessage("To the server!");

    const image = await card.build({ format: "png" });
    const attachment = new AttachmentBuilder(image, { name: "GreetingsCard.png" })
    await interaction.reply({ files: [attachment] });


}
