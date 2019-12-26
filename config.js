const config = {
  "gatsby": {
    "pathPrefix": "/",
    "siteUrl": "https://sitecore.dubovitsky.com",
    "gaTrackingId": null
  },
  "header": {
    "logo": "",
    "logoLink": "/",
    "title": "Sitecore Delivery Playbook",
    "githubUrl": "",
    "helpUrl": "",
    "tweetText": "",
    "links": [
      { "text": "", "link": "" }
    ],
    "search": {
      "enabled": false,
      "indexName": "learn-hasura-test",
      "algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
      "algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      "algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
    }
  },
  "sidebar": {
    "forcedNavOrder": [
      "/introduction",
      // "/codeblock"
    ],
    "links": [
      { "text": "Sitecore", "link": "https://www.sitecore.com/" },
    ],
    "frontline": true,
    "ignoreIndex": true,
  },
  "siteMetadata": {
    "title": "Sitecore Delivery Playbook | Dubovitsky",
    "description": "Sitecore Delivery Playbook",
    "ogImage": null,
    "docsLocation": "https://github.com/dubovitsky/sitecore-delivery-playbook/tree/master/content",
    "favicon": "https://sitecorecdn.azureedge.net/-/media/sitecoresite/images/global/logo/favicon.png"
  },
};

module.exports = config;
