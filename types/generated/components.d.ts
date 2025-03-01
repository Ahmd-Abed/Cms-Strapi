import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CarouselCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'picture';
  };
  attributes: {
    carousel_collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::carousel-collection.carousel-collection'
    >;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    faq_collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-collection.faq-collection'
    >;
  };
}

export interface FooterFooterItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_items';
  info: {
    displayName: 'FooterItem';
    icon: 'check';
  };
  attributes: {
    Footer: Schema.Attribute.Component<'footer.sub-footer-link', true>;
    IsShown: Schema.Attribute.Boolean & Schema.Attribute.Required;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSubFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_sub_footer_links';
  info: {
    displayName: 'SubFooterLink';
    icon: 'calendar';
  };
  attributes: {
    IsShown: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MediaImages extends Struct.ComponentSchema {
  collectionName: 'components_media_images';
  info: {
    description: '';
    displayName: 'Images';
    icon: 'landscape';
  };
  attributes: {
    images: Schema.Attribute.Relation<
      'oneToMany',
      'api::image-file.image-file'
    >;
  };
}

export interface MediaPublications extends Struct.ComponentSchema {
  collectionName: 'components_media_publications';
  info: {
    description: '';
    displayName: 'Publications';
    icon: 'file';
  };
  attributes: {
    publications: Schema.Attribute.Relation<
      'oneToMany',
      'api::publication.publication'
    >;
  };
}

export interface MediaVideos extends Struct.ComponentSchema {
  collectionName: 'components_media_videos';
  info: {
    description: '';
    displayName: 'Videos';
    icon: 'picture';
  };
  attributes: {
    videos: Schema.Attribute.Relation<'oneToMany', 'api::video.video'>;
  };
}

export interface MunicipalCouncilMunicipalCouncil
  extends Struct.ComponentSchema {
  collectionName: 'components_municipal_council_municipal_councils';
  info: {
    description: '';
    displayName: 'MunicipalCouncil';
    icon: 'bulletList';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images', true>;
    SideBar: Schema.Attribute.Component<
      'side-bar-municipal-council.item',
      true
    >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_nav_items';
  info: {
    description: '';
    displayName: 'NavItem';
    icon: 'bulletList';
  };
  attributes: {
    IsShown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    SubItem: Schema.Attribute.Component<'navbar.sub-navbar-item', true>;
  };
}

export interface NavbarSubNavbarItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_sub_navbar_items';
  info: {
    description: '';
    displayName: 'SubNavbarItem';
    icon: 'bulletList';
  };
  attributes: {
    IsShown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NewsNews extends Struct.ComponentSchema {
  collectionName: 'components_news_news';
  info: {
    description: '';
    displayName: 'News';
    icon: 'book';
  };
  attributes: {
    news_collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-collection.news-collection'
    >;
  };
}

export interface QuickLinksQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_quick_links_quick_links';
  info: {
    displayName: 'QuickLinks';
    icon: 'attachment';
  };
  attributes: {
    quick_links_collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::quick-links-collection.quick-links-collection'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SideBarMunicipalCouncilItem extends Struct.ComponentSchema {
  collectionName: 'components_side_bar_municipal_council_items';
  info: {
    description: '';
    displayName: 'Item';
    icon: 'apps';
  };
  attributes: {
    IsShown: Schema.Attribute.Boolean & Schema.Attribute.Required;
    Item: Schema.Attribute.String & Schema.Attribute.Required;
    SubItem: Schema.Attribute.Component<
      'side-bar-municipal-council.sub-item',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SideBarMunicipalCouncilSubItem extends Struct.ComponentSchema {
  collectionName: 'components_side_bar_municipal_council_sub_items';
  info: {
    description: '';
    displayName: 'SubItem';
    icon: 'bulletList';
  };
  attributes: {
    IsShown: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'carousel.carousel': CarouselCarousel;
      'faq.faq': FaqFaq;
      'footer.footer-item': FooterFooterItem;
      'footer.sub-footer-link': FooterSubFooterLink;
      'media.images': MediaImages;
      'media.publications': MediaPublications;
      'media.videos': MediaVideos;
      'municipal-council.municipal-council': MunicipalCouncilMunicipalCouncil;
      'navbar.nav-item': NavbarNavItem;
      'navbar.sub-navbar-item': NavbarSubNavbarItem;
      'news.news': NewsNews;
      'quick-links.quick-links': QuickLinksQuickLinks;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'side-bar-municipal-council.item': SideBarMunicipalCouncilItem;
      'side-bar-municipal-council.sub-item': SideBarMunicipalCouncilSubItem;
    }
  }
}
