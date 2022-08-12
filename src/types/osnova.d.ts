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
}

export { Osnova };
