const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

//api method to return an empty json
app.get('/.well-known/openid-configuration', (req, res) => {
    res.setHeader('access-control-allow-origin', '*');
    res.send({
        "issuer": "https://pushbullet.com",
        "authorization_endpoint": "https://pushbullet.com/o/oauth2/authorize",
        "device_authorization_endpoint": "https://pushbullet.com/o/oauth2/authorize",
        "token_endpoint": "https://pushbullet.com/o/oauth2/authorize",
        "userinfo_endpoint": "https://pushbullet.com/o/oauth2/authorize",
        "revocation_endpoint": "https://pushbullet.com/o/oauth2/authorize",
        "jwks_uri": "https://pushbullet.com/o/oauth2/authorize",
        "response_types_supported": [
         "token",
        ],
        "subject_types_supported": [
         "public"
        ],
        "id_token_signing_alg_values_supported": [
         "RS256"
        ],
        "scopes_supported": [
         "everything"
        ],
        "grant_types_supported": [
         "authorization_code",
         "refresh_token",
         "urn:ietf:params:oauth:grant-type:device_code",
         "urn:ietf:params:oauth:grant-type:jwt-bearer"
        ]
       });
    }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));