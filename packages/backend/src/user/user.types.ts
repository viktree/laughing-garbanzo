export interface RedditUser {
  is_employee: boolean;
  seen_layout_switch: boolean;
  has_visited_new_profile: boolean;
  pref_no_profanity: boolean;
  has_external_account: boolean;
  pref_geopopular: string;
  seen_redesign_modal: boolean;
  pref_show_trending: boolean;
  subreddit: Subreddit;
  is_sponsor: boolean;
  gold_expiration: null;
  has_gold_subscription: boolean;
  num_friends: number;
  features: Features;
  has_android_subscription: boolean;
  verified: boolean;
  pref_autoplay: boolean;
  coins: number;
  has_paypal_subscription: boolean;
  has_subscribed_to_premium: boolean;
  id: string;
  has_stripe_subscription: boolean;
  seen_premium_adblock_modal: boolean;
  can_create_subreddit: boolean;
  over_18: boolean;
  is_gold: boolean;
  is_mod: boolean;
  suspension_expiration_utc: null;
  has_verified_email: boolean;
  is_suspended: boolean;
  pref_video_autoplay: boolean;
  can_edit_name: boolean;
  in_redesign_beta: boolean;
  icon_img: string;
  pref_nightmode: boolean;
  oauth_client_id: string;
  hide_from_robots: boolean;
  password_set: boolean;
  link_karma: number;
  force_password_reset: boolean;
  seen_give_award_tooltip: boolean;
  inbox_count: number;
  pref_top_karma_subreddits: boolean;
  pref_show_snoovatar: boolean;
  name: string;
  pref_clickgadget: number;
  created: number;
  gold_creddits: number;
  created_utc: number;
  has_ios_subscription: boolean;
  pref_show_twitter: boolean;
  in_beta: boolean;
  comment_karma: number;
  has_subscribed: boolean;
  linked_identities: any[];
  seen_subreddit_chat_ftux: boolean;
}

export interface Features {
  promoted_trend_blanks: boolean;
  show_amp_link: boolean;
  chat: boolean;
  twitter_embed: boolean;
  is_email_permission_required: boolean;
  mod_awards: boolean;
  mweb_xpromo_revamp_v3: Mweb;
  mweb_xpromo_revamp_v2: Mweb;
  awards_on_streams: boolean;
  mweb_xpromo_modal_listing_click_daily_dismissible_ios: boolean;
  chat_subreddit: boolean;
  modlog_copyright_removal: boolean;
  do_not_track: boolean;
  chat_user_settings: boolean;
  resized_styles_images: boolean;
  mweb_xpromo_interstitial_comments_ios: boolean;
  mweb_sharing_clipboard: Mweb;
  premium_subscriptions_table: boolean;
  mweb_xpromo_interstitial_comments_android: boolean;
  mweb_nsfw_xpromo: Mweb;
  mweb_xpromo_modal_listing_click_daily_dismissible_android: boolean;
  stream_as_a_post_type: boolean;
  mweb_sharing_web_share_api: Mweb;
  chat_group_rollout: boolean;
  custom_feeds: boolean;
  spez_modal: boolean;
  noreferrer_to_noopener: boolean;
  expensive_coins_package: boolean;
}

export interface Mweb {
  owner: string;
  variant: string;
  experiment_id: number;
}

export interface Subreddit {
  default_set: boolean;
  user_is_contributor: boolean;
  banner_img: string;
  restrict_posting: boolean;
  user_is_banned: boolean;
  free_form_reports: boolean;
  community_icon: null;
  show_media: boolean;
  icon_color: string;
  user_is_muted: boolean;
  display_name: string;
  header_img: null;
  title: string;
  coins: number;
  previous_names: any[];
  over_18: boolean;
  icon_size: number[];
  primary_color: string;
  icon_img: string;
  description: string;
  submit_link_label: string;
  header_size: null;
  restrict_commenting: boolean;
  subscribers: number;
  submit_text_label: string;
  is_default_icon: boolean;
  link_flair_position: string;
  display_name_prefixed: string;
  key_color: string;
  name: string;
  is_default_banner: boolean;
  url: string;
  banner_size: null;
  user_is_moderator: boolean;
  public_description: string;
  link_flair_enabled: boolean;
  disable_contributor_requests: boolean;
  subreddit_type: string;
  user_is_subscriber: boolean;
}

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string;
  email?: string;
  blog: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
