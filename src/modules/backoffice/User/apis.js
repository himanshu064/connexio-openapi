
/**
 * @swagger
 * /client_users/{clientId}:
 *   get:
 *     summary: list all the client users by client id
 *     tags: [users]
 *     parameters:
 *      - name: clientId
 *        in: path
 *        description: Id of the client
 *        required: true
 *        schema:
 *         type: string
 *     responses:
 *       200:
 *         description: clients fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/client_user'
 *       403:
 *         description: token error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/client_user'
 *       422:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/client_user'
 *     security:
 *       - bearerAuth: []
 */

module.exports = paths;