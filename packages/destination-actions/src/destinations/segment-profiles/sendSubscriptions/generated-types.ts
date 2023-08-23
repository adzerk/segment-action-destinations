// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * The Profile Space to use for creating a record. *Note: This field shows list of internal sources associated with the Profile Space. Changes made to the Profile Space name in **Settings** will not reflect in this list unless the source associated with the Profile Space is renamed explicitly.*
   */
  engage_space: string
  /**
   * Unique identifier for the user in your database. A userId or an anonymousId is required.
   */
  user_id?: string
  /**
   * A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. A userId or an anonymousId is required.
   */
  anonymous_id?: string
  /**
   * The group or account ID a user is associated with.
   */
  group_id?: string
  /**
   * Free-form dictionary of traits that describe the user or group of users.
   */
  traits?: {
    [k: string]: unknown
  }
  /**
   * Subscription Object contains Global Subscription , Channel , Subscription Groups.
   */
  subscriptions: {
    /**
     * A unique identifier for the collection. For example Email, Phone or Push Tokens.
     */
    key?: string
    /**
     * A Channel to update subscription EMAIL | SMS | Whatsapp | IosPush | AndroidPush.
     */
    type?: string
    /**
     * The subscription status for the Channel true is subscribed, false is unsubscribed and null|undefined is did-not-subscribe.
     */
    status?: boolean
  }[]
  /**
   * Subscription groups and their statuses for this id.
   */
  subscriptionGroups?: {
    groupName?: string
    /**
     * Group subscription status true is subscribed, false is unsubscribed and null is did-not-subscribe
     */
    isSubscribed?: boolean
  }[]
}