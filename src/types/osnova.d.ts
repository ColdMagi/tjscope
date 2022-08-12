namespace Osnova {
  export namespace Subsite {
    // Generated by https://quicktype.io
    export interface SubsiteResponse {
      result: Subsite;
      message: string;
    }

    export interface Subsite {
      id: number;
      type: number;
      name: string;
      description: string;
      avatar: Avatar;
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
}

export { Osnova };
