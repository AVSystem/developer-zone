# Adding user API authorization tokens

!!! note
    To be able to access this feature, you need to have the *smg.userProfile* and *userProfile.tokens* permissions assigned.

The API authorization tokens are used to autorize users in REST API through the *Authorization: Bearer <token>* HTTP header (example: `Authorization: Bearer qp82nps7h23`). Read this section to learn how to view, generate and invalidate REST API authorization tokens assigned to your account:

1. To see the list of tokens assigned to your account, go to **My account —> My profile**.
2. Use the **Add new** link located under the tokens list to add a new token entry.
3. Provide token name and invalidation date, then click the **Generate new token** link.
4. In the pop-up window that appears, copy the newly generated token to clipboard and close the window.

    !!! warning
        You won't be able to copy the token after closing the window.

5. To invalidate a token, click the **Invalidate** link.

 ![A list of user tokens](images/User_tokens.png "A list of user tokens"){: .center }
  *Fig. A list of user tokens*
