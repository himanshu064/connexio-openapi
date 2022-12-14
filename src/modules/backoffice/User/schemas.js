// Get client users by client id
/**
 *   @swagger
 *   components:
 *   schemas:
 *     client_user:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - plain_password
 *         - groups
 *       properties:
 *         email:
 *           type: string
 *           title: Email
 *           widget: email
 *           help: This email address will be used in the system
 *           propertyOrder: 11
 *         gender:
 *          type: string
 *          title: Gender
 *          enum:
 *           - female
 *           - male
 *           - n/a
 *          enum_titles:
 *           - Female
 *           - Male
 *           - N/A
 *          propertyOrder: 5
 *         groups:
 *          type: array
 *          title: User Groups
 *          items:
 *            type: string
 *            title: prototype
 *            attr: 
 *             data-plugin-select-2: true
 *            enum: ["admin", "user"]
 *            enum_titles: ["Admin", "User"]
 *          propertyOrder: 14
 *          help: Select group(s) for the created user
 *         is_admin:
 *          type: boolean
 *          title: Admin
 *          widget: checkbox
 *          propertyOrder: 13
 *          help: If you select this, then account will be added as an Admin account
 *         last_name:
 *          type: string
 *          title: Last Name
 *          propertyOrder: 4
 *         name:
 *          type: string
 *          title: Name
 *          help: User's name
 *          minLength: "1"
 *          propertyOrder: 1
 *         password_login_allowed:
 *          type: boolean
 *          title: Password Login Allowed
 *          widget: checkbox
 *          propertyOrder: 10
 *          help: enable this option to let the user log in to the system with their password
 *         phone_number:
 *          type: string
 *          title: Phone Number
 *          propertyOrder: 6
 *          help: Enter a valid phone number
 *         picture:
 *          accept: image/*
 *          attr:
 *           bulk_editable: false
 *          help: Users picture
 *          max_size: 4000000
 *          multiple: false
 *          propertyOrder: 12
 *          title: Picture
 *          type: string
 *          widget: file_widget
 *         plain_password:
 *          type: object
 *          title: plain_password
 *          attr:
 *           disable_wrapper: true
 *           bulk_editable: false
 *          properties:
 *           first:
 *            type: string
 *            title: Password
 *            widget: password
 *            propertyOrder: 1
 *            help: Password to be used when logging into the system
 *           second:
 *            type: string
 *            title: Confirm Password
 *            widget: password
 *            propertyOrder: 2
 *          propertyOrder: 8
 *         preferred_name:
 *          type: string
 *          title: Preferred Name
 *          propertyOrder: 3
 *         second_name:
 *          type: string
 *          title: Second Name
 *          propertyOrder: 2
 *         timezone:
 *          type: string
 *          title: Timezone
 *          help: a default timezone for the user
 *          propertyOrder: 9
 *         username:
 *          type: string
 *          title: Username
 *          propertyOrder: 7
 *          help: Username to be used when logging into the system
 *          minLength: "2"
 *          attr:
 *           bulk_editable: false
 */
