define({ "api": [  {    "type": "post",    "url": "/auth/grant/:type",    "title": "",    "name": "Auth_grants",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"POST\" \"https://api.bloglovin.com/auth/grant/app\" \\\n  -H \"Content-Type: application/json\" \\\n -d $'{\n  \"app_id\": \"fdsfg\"\n }'",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "allowedValues": [              "\"app\"",              "\"user\"",              "\"legacy\""            ],            "optional": false,            "field": "type",            "description": "<p>Type of grant</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "app_id",            "description": "<p>Application id</p> "          }        ],        "User": [          {            "group": "User",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>User email</p> "          },          {            "group": "User",            "type": "<p>String</p> ",            "optional": false,            "field": "password",            "description": "<p>User password</p> "          }        ],        "Legacy": [          {            "group": "Legacy",            "type": "<p>String</p> ",            "optional": false,            "field": "legacy_token",            "description": "<p>Old legacy token</p> "          },          {            "group": "Legacy",            "type": "<p>Number</p> ",            "optional": false,            "field": "user",            "description": "<p>User id</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "{\n  token: {string}\n}",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "token",            "description": "<p>JSON Web Token</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MISSING_PARAM_APP_ID",            "description": "<p>Missing app_id field</p> "          }        ],        "User": [          {            "group": "User",            "optional": false,            "field": "MISSING_PARAM_EMAIL",            "description": "<p>Missing email field</p> "          },          {            "group": "User",            "optional": false,            "field": "MISSING_PARAM_PASSWORD",            "description": "<p>Missing password field</p> "          },          {            "group": "User",            "optional": false,            "field": "USER_NOT_FOUND",            "description": ""          },          {            "group": "User",            "optional": false,            "field": "USER_NOT_VALIDATED",            "description": ""          },          {            "group": "User",            "optional": false,            "field": "USER_PERMISSION_FAILURE",            "description": "<p>User doesn't have required level</p> "          },          {            "group": "User",            "optional": false,            "field": "INVALID_PASSWORD",            "description": ""          }        ],        "Legacy": [          {            "group": "Legacy",            "optional": false,            "field": "USER_NOT_FOUND",            "description": ""          },          {            "group": "Legacy",            "optional": false,            "field": "MISSING_PARAM_LEGACY_TOKEN",            "description": ""          },          {            "group": "Legacy",            "optional": false,            "field": "MISSING_PARAM_USER",            "description": ""          },          {            "group": "Legacy",            "optional": false,            "field": "INVALID_TOKEN",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/Auth.php",    "groupTitle": "Auth"  },  {    "type": "",    "url": "@apiName",    "title": "Error handler",    "group": "Error",    "error": {      "examples": [        {          "title": "Error-example:",          "content": "{\n  error: {String} Machine readable error code,\n  message: {String} Human readable error message,\n  code: {Number} HTTP status code,\n  data: {Object} Error related data,\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/controllers/Error.php",    "groupTitle": "Error",    "name": "Apiname"  },  {    "type": "post",    "url": "/v2/groups",    "title": "",    "name": "Group_create",    "group": "Group",    "permission": [      {        "name": "user"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"POST\" \"https://api.bloglovin.com/v2/groups\" \\\n-H \"Authorization: XYZ\" \\\n-d \"{\\\"blog_ids\\\": [1,2,3], {\\\"name\\\": \\\"Test\\\"}\"",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Array</p> ",            "optional": false,            "field": "blog_ids",            "description": "<p>List of blog ids for group</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of group</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "{\n  \"result\": [\n    {\n      \"created\": true,\n      \"name\": \"Test\",\n      \"id\": \"1\"\n    }\n  ]\n}",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "results",            "description": "<p>contains the name of the group, the id, and whether or not it is new. The user must already be following the blogs in order to add them to the group.</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MISSING_PARAM_NAME",            "description": "<p>Missing name</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "INVALID_PARAM_BLOG_IDS",            "description": "<p>Parameter blog_ids is not an array</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/Group.php",    "groupTitle": "Group"  },  {    "type": "delete",    "url": "/v2/groups",    "title": "",    "name": "Group_delete",    "group": "Group",    "permission": [      {        "name": "user"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"DELETE\" \"https://api.bloglovin.com/v2/groups\" \\\n-H \"Authorization: XYZ\" \\\n-d \"{\\\"id\\\": 100}\"",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>int</p> ",            "optional": false,            "field": "id",            "description": "<p>Group id</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "{\n  \"result\": [\n    {\n      \"success\": true,\n    }\n  ]\n}",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "results",            "description": "<p>contains whether or not it successfully deleted the group. The user still follows all blogs in that group.</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MISSING_PARAM_ID",            "description": "<p>Missing group id</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "INVALID_PARAM_ID",            "description": "<p>Invalid group id</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/Group.php",    "groupTitle": "Group"  },  {    "type": "post",    "url": "/v2/groups/move_blog",    "title": "",    "name": "Group_move_blog",    "group": "Group",    "permission": [      {        "name": "user"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"PUT\" \"https://api.bloglovin.com/v2/groups/move_blog\" \\\n-H \"Authorization: XYZ\" \\\n-d \"{\\\"blog_id\\\": 1, \\\"group_id\\\": 100}\"",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Int</p> ",            "optional": false,            "field": "blog_id",            "description": "<p>ID of blog to add</p> "          },          {            "group": "Parameter",            "type": "<p>Int</p> ",            "optional": false,            "field": "group_id",            "description": "<p>ID of group to move blog to</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "{\n  \"result\": [\n    {\n      \"success\": true,\n    }\n  ]\n}",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "result",            "description": "<p>will contain a boolean success. If it is successful the blog was moved to the new group. A blog can only be a part of one group per user at a time.</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MISSING_PARAM_GROUP_ID",            "description": "<p>Missing group id</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "MISSING_PARAM_BLOG_ID",            "description": "<p>Missing blog id</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "INVALID_PARAM_GROUP_ID",            "description": "<p>Invalid group id</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "INVALID_PARAM_BLOG_ID",            "description": "<p>Invalid blog id</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/Group.php",    "groupTitle": "Group"  },  {    "type": "post",    "url": "/v2/groups",    "title": "",    "name": "Group_remove_blog",    "group": "Group",    "permission": [      {        "name": "user"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"PUT\" \"https://api.bloglovin.com/v2/groups/remove_blog\" \\\n-H \"Authorization: XYZ\" \\\n-d \"{\\\"blog_id\\\": 1}\"",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Int</p> ",            "optional": false,            "field": "blog_id",            "description": "<p>ID of blog to remove from group</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of group</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "{\n  \"result\": [\n    {\n      \"success\": true,\n    }\n  ]\n}",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "result",            "description": "<p>just says success is true. The user still follows the blog in that group.</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MISSING_PARAM_BLOG_ID",            "description": "<p>Missing blog_id</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/Group.php",    "groupTitle": "Group"  },  {    "type": "post",    "url": "/v2/users/email_check",    "title": "",    "name": "User_email_check",    "group": "User",    "permission": [      {        "name": "user"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"POST\" \"https://api.bloglovin.com/v2/users/email_check\" \\\n-H \"Authorization: XYZ\" \\\n-d \"{\\\"emails\\\": [\\\"test@bloglovin.com\\\"]}\"",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Array</p> ",            "optional": false,            "field": "emails",            "description": "<p>List of emails to check</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "{\n  \"meta\": {\n    \"emails_not_found\": [\n      \"test@example.com\"\n    ],\n    \"resolved\": {\n      \"blog\": [],\n      \"collection\": [],\n      \"post\": [],\n      \"user\": {\n        \"6006\": {\n          \"user_id\": \"6006\",\n          \"location\": null,\n          \"facebook_profile\": null,\n          \"twitter_profile\": null,\n          \"first_name\": \"Test\",\n          \"last_name\": null,\n          \"avatar\": \"/images/user-default-120-3.png\",\n          \"username\": \"test\",\n          \"profile_link\": \"/test\",\n          \"about\": \"\",\n          \"exists\": true,\n          \"cache\": true,\n          \"followers\": 0,\n          \"type\": \"user\"\n        }\n      },\n      \"followstatus\": [\n        {\n          \"type\": \"user\",\n          \"id\": \"6006\",\n          \"status\": true\n        },\n        {\n          \"type\": \"user\",\n          \"id\": \"6004\",\n          \"status\": false\n        }\n      ]\n    }\n  },\n  \"result\": [\n    {\n      \"entity\": {\n        \"type\": \"user\",\n        \"id\": \"6006\",\n        \"email\": \"test@bloglovin.com\"\n      }\n    },\n    {\n      \"entity\": {\n        \"type\": \"user\",\n        \"id\": \"6004\",\n        \"email\": \"admin@devlovin.com\"\n      }\n    }\n  ]\n}",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "meta",            "description": "<p>contains a list of emails we did not find, a dictionary of user objects where the user id is the key (these users can be followed), an array of dictionaries called followstatus that says whether the currently signed in user is following each of those users already and a result entity array that has all the users we did find in the database, including users that cannot be followed because they don't have a profile on Bloglovin (this case should be rare).</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MISSING_PARAM_EMAILS",            "description": "<p>Missing emails array</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "INVALID_PARAM_EMAILS",            "description": "<p>Parameter emails is not an array</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/User.php",    "groupTitle": "User"  },  {    "type": "post",    "url": "/v2/users/follow",    "title": "",    "name": "User_follow",    "group": "User",    "permission": [      {        "name": "user"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"POST\" \"https://api.bloglovin.com/v2/users/follow\" \\\n-H \"Authorization: XYZ\" \\\n-d \"{\\\"user_id\\\": 1},\\\"follow\\\":true\"",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>int</p> ",            "optional": false,            "field": "user_id",            "description": "<p>for signed in user to follow</p> "          },          {            "group": "Parameter",            "type": "<p>boolean</p> ",            "optional": false,            "field": "follow",            "description": "<p>true to follow, false to unfollow</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "{\n  \"meta\": {\n    \"resolved\": []\n  },\n  \"result\": [\n    {\n      \"entity\": {\n        \"type\": \"user\",\n        \"id\": \"1\",\n        \"follow\": true\n      }\n    }\n  ]\n}",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "a",            "description": "<p>result entity array that has the user followed</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "INVALID_PARAM_ID",            "description": "<p>Parameter id is not a valid user id</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/User.php",    "groupTitle": "User"  },  {    "type": "post",    "url": "/v2/users/invite",    "title": "",    "name": "User_invite",    "group": "User",    "permission": [      {        "name": "user"      }    ],    "examples": [      {        "title": "Example-request:",        "content": "curl -X \"POST\" \"https://api.bloglovin.com/v2/users/invite\" \\\n-H \"Authorization: XYZ\" \\\n-d \"{\\\"email\\\": \\\"darren@bloglovin.com\\\"}\"",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "email",            "description": "<p>for person to invite</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-response:",          "content": "[\n  \"Invite sent!\"\n]",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "a",            "description": "<p>successful sent message</p> "          }        ]      }    },    "error": {      "examples": [        {          "title": "Error-response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  error: {string}\n  message: {string}\n  code: {http status code}\n}",          "type": "json"        }      ],      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "INVALID_PARAM_EMAIL",            "description": "<p>Parameter email is not valid</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/User.php",    "groupTitle": "User"  }] });