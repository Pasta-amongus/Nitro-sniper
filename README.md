# Nitro-sniper



{
   tokens: {
      // Main Token (ex: Nz...)
      main: '',
      // Alt Tokens (ex: Nz...)
      alts: [
         '',
      ],
   },
   // The mode to run the sniper in. Options: main (only main account), alts (only alts), both
   mode: 'both',
   /* 
      The status the accounts should be on.
      Options: online, dnd, idle, offline, default
      default means the status will not be modified.
   */
   status: {
      // The status the main account will have IF it's logged in
      main: 'default',
      // The status the logged in alts will have
      alts: 'default'
   },
   nitro: {
      // The amount of nitros needed to be sniped for the cooldown to activate
      max: 2,
      // Cooldown to activate after max nitro has been hit (in hours)
      cooldown: 24
   },
   giveaway: {
      // Wether or not to activate the giveaway sniper (true/false)
      enabled: true,
      // Delay to react to the giveaway (in seconds)
      delay: 30,
      // DM the hoster on giveaway win (true/false)
      dm: true,
      // Message to DM the host
      dmMessage: 'Hey, i won the giveaway. Could i redeem my prize?',
      // How long to wait to DM (in seconds)
      dmDelay: 25,
      // Blacklisted words for giveaway prizes
      blacklistedWords: [
         'bot',
         'test',
         'ban'
      ],
      // Only react to whitelisted giveaway prizes (true/false)
      whitelistOnly: false,
      // Whitelisted words for giveaway prizes
      whitelistedWords: [
         'nitro'
      ],
      // Blacklisted Server IDs to not snipe giveaways on
      blacklistedServers: [
         ''
      ],
      // Only snipe giveaways on whitelisted servers (true/false)
      whitelistServersOnly: false,
      whitelistedServers: [
        ''
      ]
   },
   invite: {
      // Wether or not to activate the invite sniper (true/false)
      enabled: false,
      delay: {
         // Minimum delay to join the server (in seconds)
         min: 10,
         // Maximum delay to join the server (in seconds)
         max: 20
      },
      members: {
         // The minimum member count the server should have
         min: 1500,
         // The maximum member count the server should have
         max: 50000
      },
      // The amount of joined invites needed for the cooldown to activate
      max: 10,
      // Cooldown to activate after max joined invites has been hit (in hours)
      cooldown: 6,
      // Wether to allow the main token to snipe invites (true/false)
      onlyAlts: true
   },
   webhook: {
      // URL to fire webhook to for notifications (ex: https://discord.com/api/webhooks/.../...)
      url: '',
      enabled: {
         // Fire webhook on invalid code (true/false)
         codeInvalid: false,
         // Fire webhook on already redeemed code (true/false)
         codeAlreadyRedeemed: false,
         // Fire webhook on sniped code (true/false)
         codeSuccess: true,
         // Fire webhook on giveaway enter (true/false)
         giveawayEntered: true,
         // Fire webhook on giveaway win (true/false)
         giveawayWin: true,
         // Fire webhook on invite join (true/false)
         inviteJoin: false,
         // Fire webhook on failure of sniping invite (true/false)
         inviteFail: false
      },
      mentionEveryone: {
         // Mention on invalid code (true/false)
         codeInvalid: false,
         // Mention on already redeemed code (true/false)
         codeAlreadyRedeemed: false,
         // Mention on sniped code (true/false)
         codeSuccess: true,
         // Mention on giveaway enter (true/false)
         giveawayEntered: false,
         // Mention on giveaway win (true/false)
         giveawayWin: true,
         // Mention on invite join (true/false)
         inviteJoin: false,
         // Mention on failure of sniping invite (true/false)
         inviteFail: false
      }
   }
}
