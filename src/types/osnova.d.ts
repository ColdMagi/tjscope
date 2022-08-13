namespace Osnova {
  /** @api 2.31 */
  export namespace Subsite {
    // Generated by https://quicktype.io
    export interface SubsiteResponse {
      result: { role: number; subsite: Subsite };
      message: string;
    }

    export interface Subsite {
      id: number;
      type: number;
      name: string;
      description: string;
      avatar: { type: string; data: Avatar };
      cover: Avatar;
      created: number;
      url: string;
      subtype: string;
      hashtags: string[];
      isSubscribed: boolean;
      isVerified: boolean;
      isOnline: boolean;
      isMuted: boolean;
      isUnsubscribable: boolean;
      isEnableWriting: boolean;
      isSubscribedToNewPosts: boolean;
      rating: number;
      contacts: Contacts;
      commentEditor: CommentEditor;
      isAvailableForMessenger: boolean;
      isPlus: boolean;
      counters: Counters;
      threeSubscribers: ThreeSubscri[];
      threeSubscriptions: ThreeSubscri[];
      rules: string;
      isFavorited: boolean;
      counterSubscribers: number;
      isRecommended: boolean;
    }

    export interface Image {
      type: string;
      data: Avatar;
    }

    export interface Avatar {
      id: string;
      uuid: string;
      additionalData: string;
      type: string;
      color: string;
      width: number;
      height: number;
      size: number;
      name: string;
      origin: string;
      title: string;
      description: string;
      url: string;
      image?: Image;
    }

    export interface CommentEditor {
      enabled: boolean;
      who: string;
      text: string;
      until: string;
      reason: string;
    }

    export interface Contacts {
      socials: Social[];
      site: Site;
      email: string;
      contacts: string;
    }

    export interface Site {
      title: string;
      url: string;
    }

    export interface Social {
      id: number;
      type: number;
      username: string;
      title: string;
      url: string;
    }

    export interface Counters {
      entries: number;
      comments: number;
      favorites: number;
      events: number;
      vacancies: number;
      subscribers: number;
      subscriptions: number;
      votes: Votes;
    }

    export interface Votes {
      entries: number;
    }

    export interface ThreeSubscri {
      id: number;
      type: number;
      name: string;
      description: string;
      avatar: Avatar;
      cover: Avatar;
      isSubscribed: boolean;
      isFavorited: boolean;
      isVerified: boolean;
      isOnline: boolean;
      isMuted: boolean;
      isUnsubscribable: boolean;
      isEnabledCommentEditor: boolean;
      commentEditor: CommentEditor;
      isAvailableForMessenger: boolean;
    }
  }

  /** @api 1.9 */
  export namespace Entry {
    // Generated by https://quicktype.io

    export interface EntriesResponse {
      message: string;
      result: Entry[];
    }

    export interface Entry {
      id: number;
      url: string;
      author: Author;
      badges: Badge[];
      commentsCount: number;
      commentsSeenCount: null;
      favoritesCount: number;
      cover: Cover | null;
      date: number;
      dateRFC: string;
      date_favorite: null;
      last_modification_date: number;
      hitsCount: number;
      intro: string;
      introInFeed: null;
      isEnabledComments: boolean;
      isEnabledLikes: boolean;
      isFavorited: boolean;
      isRepost: boolean;
      likes: Likes;
      subsite: Subsite;
      similar: any[];
      title: string;
      type: number;
      entryContent: EntryContent;
      commentatorsAvatars: string[];
      webviewUrl: null;
      isPinned: boolean;
      canEdit: boolean;
      etcControls: EtcControls;
      highlight: string;
      blocks: Block[];
      subscribedToTreads: boolean;
      is_show_thanks: boolean;
      is_still_updating: boolean;
      is_filled_by_editors: boolean;
      isEditorial: boolean;
      audioUrl: null;
      hotness: number;
      commentEditor: CommentEditor;
      summarize: string;
    }

    export interface Author {
      id: number;
      url: string;
      name: string;
      type: number;
      avatar: Avatar;
      avatar_url: string;
      is_online: boolean;
      is_verified: boolean;
      is_subscribed: boolean;
    }

    export interface Avatar {
      type: AvatarType;
      data: AvatarData;
    }

    export interface AvatarData {
      uuid: string;
      width: number;
      height: number;
      size: number;
      type: DataType;
      color: string;
      hash: string;
      external_service: any[];
    }

    export enum DataType {
      Jpg = "jpg",
    }

    export enum AvatarType {
      Image = "image",
    }

    export interface Badge {
      type: string;
      text: string;
      background: string;
      color: string;
      border: string;
    }

    export interface Block {
      type: BlockType;
      data: BlockData;
      cover: boolean;
      hidden: boolean;
      anchor: string;
    }

    export interface BlockData {
      text?: string;
      text_truncated?: TextTruncated;
      items?: Item[];
    }

    export interface Item {
      title: string;
      image: Avatar;
    }

    export enum TextTruncated {
      Same = "<<<same>>>",
    }

    export enum BlockType {
      Media = "media",
      Text = "text",
    }

    export interface CommentEditor {
      enabled: boolean;
    }

    export interface Cover {
      additionalData: AdditionalData;
      size: Size;
      thumbnailUrl: string;
      type: number;
      url: string;
      size_simple: string;
    }

    export interface AdditionalData {
      size: number;
      type: DataType;
      uuid: string;
    }

    export interface Size {
      width: number;
      height: number;
    }

    export interface EntryContent {
      html: string;
      version: string;
    }

    export interface EtcControls {}

    export interface Likes {
      is_liked: number;
      count: number;
      summ: number;
      is_hidden: boolean;
    }

    export interface Subsite {
      id: number;
      url: string;
      type: number;
      name: string;
      description: string;
      avatar: Avatar;
      avatar_url: string;
      head_cover: string;
      is_verified: boolean;
      is_enable_writing: boolean;
      is_subscribed: boolean;
      is_subscribed_to_new_posts: boolean;
      prev_entry: PrevEntry;
    }

    export interface PrevEntry {
      id: number;
      title: string;
      description: string;
    }
  }

  /** @api 1.9 */
  export namespace Comment {
    // Generated by https://quicktype.io

    export interface CommentsResponse {
      message: string;
      result: Comment[];
    }

    export interface Comment {
      id: number;
      author: CommentAuthor;
      date: number;
      dateRFC: string;
      isFavorited: boolean;
      date_favorite: null;
      isEdited: boolean;
      likes: Likes;
      media: any[];
      level: number;
      is_pinned: boolean;
      is_ignored: boolean;
      is_removed: boolean;
      replyTo: number;
      text: string;
      text_wo_md: string;
      html: string;
      attaches: Attach[];
      source_id: number;
      entry: Entry;
      load_more: LoadMore;
      etcControls: EtcControls;
      highlight: string;
      donate: null;
    }

    export interface Attach {
      type: string;
      data: AttachData;
    }

    export interface AttachData {
      url: string;
      title: string;
      description: string;
      image: Avatar;
      v: number;
    }

    export interface Avatar {
      type: AvatarType;
      data: AvatarData;
    }

    export interface AvatarData {
      uuid: string;
      width: number;
      height: number;
      size: number;
      type: DataType;
      color: string;
      hash: string;
      external_service: any[];
    }

    export enum DataType {
      GIF = "gif",
      Jpg = "jpg",
      PNG = "png",
    }

    export enum AvatarType {
      Image = "image",
    }

    export interface CommentAuthor {
      id: number;
      name: string;
      avatar_url: string;
      is_verified: boolean;
      type: number;
      is_online: boolean;
      online_status_text: string;
    }

    export interface Entry {
      id: number;
      url: string;
      author: EntryAuthor;
      badges: Badge[];
      commentsCount: number;
      commentsSeenCount: null;
      favoritesCount: number;
      cover: Cover | null;
      date: number;
      dateRFC: string;
      date_favorite: null;
      last_modification_date: number;
      hitsCount: number;
      intro: string;
      introInFeed: null;
      isEnabledComments: boolean;
      isEnabledLikes: boolean;
      isFavorited: boolean;
      isRepost: boolean;
      likes: Likes;
      subsite: Subsite;
      similar: any[];
      title: string;
      type: number;
      entryContent: null;
      commentatorsAvatars: string[];
      webviewUrl: null;
      isPinned: boolean;
      canEdit: boolean;
      etcControls: EtcControls;
      highlight: string;
      blocks: Block[];
      subscribedToTreads: boolean;
      is_show_thanks: boolean;
      is_still_updating: boolean;
      is_filled_by_editors: boolean;
      isEditorial: boolean;
      audioUrl: null;
      hotness: number;
      commentEditor: CommentEditor;
      summarize: string;
    }

    export interface EntryAuthor {
      id: number;
      url: string;
      name: string;
      type: number;
      avatar: Avatar;
      avatar_url: string;
      is_online: boolean;
      is_verified: boolean;
      is_subscribed: boolean;
    }

    export interface Badge {
      type: BadgeType;
      text: string;
      background: string;
      color: string;
      border: string;
    }

    export enum BadgeType {
      Top = "top",
    }

    export interface Block {
      type: TweetType;
      data: BlockData;
      cover: boolean;
      hidden: boolean;
      anchor: string;
    }

    export interface BlockData {
      text?: string;
      text_truncated?: string;
      items?: Array<ItemClass | string>;
      subline1?: string;
      subline2?: string;
      type?: string;
      text_size?: string;
      image?: null;
      tweet?: Tweet;
      title?: string;
      media?: boolean;
      conversation?: boolean;
      markdown?: string;
    }

    export interface ItemClass {
      title: string;
      image: Avatar;
    }

    export interface Tweet {
      type: TweetType;
      data: TweetData;
    }

    export interface TweetData {
      tweet_data: TweetDataClass;
      tweet_data_encoded: string;
      version: string;
    }

    export interface TweetDataClass {
      created_at: string;
      id: number;
      id_str: string;
      full_text: string;
      truncated: boolean;
      display_text_range: number[];
      entities: TweetDataEntities;
      source: string;
      in_reply_to_status_id: null;
      in_reply_to_status_id_str: null;
      in_reply_to_user_id: null;
      in_reply_to_user_id_str: null;
      in_reply_to_screen_name: null;
      user: TweetDataUser;
      geo: null;
      coordinates: null;
      place: null;
      contributors: null;
      is_quote_status: boolean;
      retweet_count: number;
      favorite_count: number;
      favorited: boolean;
      retweeted: boolean;
      lang: string;
      extended_entities: ExtendedEntities;
      processed_text: string;
      quoted_status_id?: number;
      quoted_status_id_str?: string;
      quoted_status_permalink?: QuotedStatusPermalink;
      quoted_status?: QuotedStatus;
      possibly_sensitive?: boolean;
      possibly_sensitive_appealable?: boolean;
    }

    export interface TweetDataEntities {
      hashtags: any[];
      symbols: any[];
      user_mentions: any[];
      urls: URL[];
    }

    export interface URL {
      url: string;
      expanded_url: string;
      display_url: string;
      indices: number[];
    }

    export interface ExtendedEntities {
      media: null;
    }

    export interface QuotedStatus {
      created_at: string;
      id: number;
      id_str: string;
      full_text: string;
      truncated: boolean;
      display_text_range: number[];
      entities: TweetDataEntities;
      source: string;
      in_reply_to_status_id: null;
      in_reply_to_status_id_str: null;
      in_reply_to_user_id: null;
      in_reply_to_user_id_str: null;
      in_reply_to_screen_name: null;
      user: QuotedStatusUser;
      geo: null;
      coordinates: null;
      place: null;
      contributors: null;
      is_quote_status: boolean;
      retweet_count: number;
      favorite_count: number;
      favorited: boolean;
      retweeted: boolean;
      lang: string;
    }

    export interface QuotedStatusUser {
      id: number;
      id_str: string;
      name: string;
      screen_name: string;
      location: string;
      description: string;
      url: null;
      entities: PurpleEntities;
      protected: boolean;
      followers_count: number;
      friends_count: number;
      listed_count: number;
      created_at: string;
      favourites_count: number;
      utc_offset: null;
      time_zone: null;
      geo_enabled: boolean;
      verified: boolean;
      statuses_count: number;
      lang: null;
      contributors_enabled: boolean;
      is_translator: boolean;
      is_translation_enabled: boolean;
      profile_background_color: string;
      profile_background_image_url: string;
      profile_background_image_url_https: string;
      profile_background_tile: boolean;
      profile_image_url: string;
      profile_image_url_https: string;
      profile_banner_url: string;
      profile_link_color: string;
      profile_sidebar_border_color: string;
      profile_sidebar_fill_color: string;
      profile_text_color: string;
      profile_use_background_image: boolean;
      has_extended_profile: boolean;
      default_profile: boolean;
      default_profile_image: boolean;
      following: null;
      follow_request_sent: null;
      notifications: null;
      translator_type: string;
      withheld_in_countries: any[];
    }

    export interface PurpleEntities {
      description: Description;
    }

    export interface Description {
      urls: URL[];
    }

    export interface QuotedStatusPermalink {
      url: string;
      expanded: string;
      display: string;
    }

    export interface TweetDataUser {
      id: number;
      id_str: string;
      name: string;
      screen_name: string;
      location: string;
      description: string;
      url: null | string;
      entities: FluffyEntities;
      protected: boolean;
      followers_count: number;
      friends_count: number;
      listed_count: number;
      created_at: string;
      favourites_count: number;
      utc_offset: null;
      time_zone: null;
      geo_enabled: boolean;
      verified: boolean;
      statuses_count: number;
      lang: null;
      contributors_enabled: boolean;
      is_translator: boolean;
      is_translation_enabled: boolean;
      profile_background_color: string;
      profile_background_image_url: string;
      profile_background_image_url_https: string;
      profile_background_tile: boolean;
      profile_image_url: string;
      profile_image_url_https: string;
      profile_banner_url: string;
      profile_link_color: string;
      profile_sidebar_border_color: string;
      profile_sidebar_fill_color: string;
      profile_text_color: string;
      profile_use_background_image: boolean;
      has_extended_profile: boolean;
      default_profile: boolean;
      default_profile_image: boolean;
      following: null;
      follow_request_sent: null;
      notifications: null;
      translator_type: string;
      withheld_in_countries: any[];
    }

    export interface FluffyEntities {
      description: Description;
      url?: Description;
    }

    export enum TweetType {
      List = "list",
      Media = "media",
      Quote = "quote",
      Text = "text",
      Tweet = "tweet",
    }

    export interface CommentEditor {
      enabled: boolean;
    }

    export interface Cover {
      additionalData: AdditionalData;
      size: Size;
      thumbnailUrl: string;
      type: number;
      url: string;
      size_simple: string;
    }

    export interface AdditionalData {
      size: number;
      type: DataType;
      uuid: string;
    }

    export interface Size {
      width: number;
      height: number;
    }

    export interface EtcControls {}

    export interface Likes {
      is_liked: number;
      count: number;
      summ: number;
      is_hidden?: boolean;
    }

    export interface Subsite {
      id: number;
      url: string;
      type: number;
      name: string;
      description: string;
      avatar: Avatar;
      avatar_url: string;
      head_cover: null | string;
      is_verified: boolean;
      is_enable_writing: boolean;
      is_subscribed: boolean;
      is_subscribed_to_new_posts: boolean;
      prev_entry?: PrevEntry;
    }

    export interface PrevEntry {
      id: number;
      title: string;
      description: string;
    }

    export interface LoadMore {
      count: number;
      ids: any[];
      avatars: any[];
    }

    // Generated by https://quicktype.io
    export interface LikersResponse {
      result: { [key: string]: Liker };
    }

    export interface Liker {
      sign: number;
      name: string;
      avatar_url: string;
    }
  }
}

export { Osnova };