export type Root = Root2[];

export interface Root2 {
  data: Data;
}

export interface Data {
  rlp: Rlp;
}

export interface Rlp {
  organic_listing: OrganicListing;
  carousels: Carousels;
  swimlanes: Swimlanes;
  dynamic_searchbar_config: DynamicSearchbarConfig;
  errors: any;
}

export interface OrganicListing {
  views: View[];
}

export interface View {
  returned_count: number;
  available_count: number;
  aggregations: Aggregations;
  items: Item[];
  events: any[];
}

export interface Aggregations {
  cuisines: Cuisine[];
  food_characteristics: FoodCharacteristic[];
  quick_filters: QuickFilter[];
  discount_labels: DiscountLabel[];
  delivery_providers: DeliveryProvider[];
  partners: Partner[];
  payment_types: PaymentType[];
  close_reasons: any[];
}

export interface Cuisine {
  id: number;
  title: string;
  count: number;
}

export interface FoodCharacteristic {
  id: number;
  title: string;
  count: number;
}

export interface QuickFilter {
  id: number;
  title: string;
  count: number;
}

export interface DiscountLabel {
  title: string;
  count: number;
}

export interface DeliveryProvider {
  id: string;
  count: number;
}

export interface Partner {
  id: string;
  title: string;
  count: number;
  image_url: string;
  logo_url: string;
}

export interface PaymentType {
  id: string;
  title: string;
  count: number;
  highlighted: boolean;
}

export interface Item {
  id: number;
  code: string;
  budget: number;
  characteristics: Characteristics;
  accepts_instructions: boolean;
  delivery_provider: string;
  customer_type: string;
  is_active: boolean;
  is_preorder_enabled: boolean;
  is_best_in_city: boolean;
  tag: string;
  name: string;
  rating: number;
  review_number: number;
  address_line2: string;
  latitude: number;
  longitude: number;
  minimum_order_amount: number;
  minimum_delivery_fee: number;
  minimum_delivery_time: number;
  original_delivery_fee: number;
  delivery_fee_delta: number;
  free_delivery_label: string;
  minimum_pickup_time: number;
  is_vat_visible: boolean;
  is_vat_included_in_product_price: boolean;
  hero_listing_image: string;
  distance: number;
  has_delivery_provider: boolean;
  loyalty_program_enabled: boolean;
  loyalty_percentage_amount: number;
  vertical: string;
  is_premium: boolean;
  ncr_pricing_model: string;
  ncr_token: string;
  preorder_time_offset: any;
  partner_ids: string[];
  metadata: Metadata;
  tags: Tag[];
  tile: Tile;
  chain: Chain;
  discounts_info: DiscountsInfo[];
  location_event: any;
  favorite_data: any;
  url_key: string;
  minimum_basket_value_discount: any;
}

export interface Characteristics {
  cuisines: Cuisine2[];
  food_characteristics: FoodCharacteristic2[];
  primary_cuisine: PrimaryCuisine;
}

export interface Cuisine2 {
  id: number;
  name: string;
  url_key: string;
}

export interface FoodCharacteristic2 {
  id: number;
  name: string;
}

export interface PrimaryCuisine {
  id: number;
  name: string;
  url_key: string;
}

export interface Metadata {
  available_in: any;
  timezone: string;
  close_reasons: any[];
  is_delivery_available: boolean;
  is_pickup_available: boolean;
  is_flood_feature_closed: boolean;
  is_temporary_closed: boolean;
  has_discount: boolean;
  events: any[];
}

export interface Tag {
  code: string;
  text: string;
  origin: any;
  label_metadata: any;
}

export interface Tile {
  type: string;
  primary_tags?: PrimaryTag[];
  secondary_tags: SecondaryTag[];
  vendor_info: VendorInfo[][];
}

export interface PrimaryTag {
  id: any;
  elements: Element[];
}

export interface Element {
  __typename: string;
  icon_id?: string;
  icon_decorators?: any[];
  text_id: any;
  text?: string;
  args?: any[];
  text_decorators?: any[];
}

export interface SecondaryTag {
  id: string;
  elements: Element2[];
}

export interface Element2 {
  __typename: string;
  text_id: any;
  text?: string;
  args?: any[];
  text_decorators?: any[];
  icon_id?: string;
  icon_decorators?: any[];
  url?: string;
}

export interface VendorInfo {
  id: string;
  elements: Element3[];
}

export interface Element3 {
  __typename: string;
  text_id: any;
  text?: string;
  args?: string[];
  text_decorators?: string[];
  icon_id?: string;
  icon_decorators?: string[];
}

export interface Chain {
  code: string;
  name: string;
}

export interface DiscountsInfo {
  id: string;
  value: number;
}

export interface Carousels {
  data: Daum[];
}

export interface Daum {
  id: string;
  campaigns: Campaign[];
}

export interface Campaign {
  campaign_id: string;
  active: boolean;
  ranking: number;
  title: string;
  subtitle: string;
  info: string;
  expedition_types: string[];
  vertical_types: string[];
  image_small: string;
  image_medium: string;
  image_large: string;
  image_small_desktop: string;
  image_large_desktop?: string;
  url_key: string;
  terms: string;
  scopes: string[];
  filters: Filters;
  links?: Links;
  voucher?: Voucher;
  external_integration: string;
}

export interface Filters {
  budgets: any;
  has_free_delivery: any;
  has_online_payment: any;
  has_discount?: boolean;
  is_voucher_enabled: any;
  tag_id?: string;
  tags: any;
  cuisine: any;
  food_characteristic: any;
}

export interface Links {
  web_link: string;
}

export interface Voucher {
  voucher_code: string;
  is_voucher_saved: boolean;
}

export interface Swimlanes {
  data: Data2;
  meta: Meta;
  request_id: string;
  status: number;
}

export interface Data2 {
  items: Item2[];
}

export interface Item2 {
  id: string;
  content_type: string;
  custom_strategy: string;
  filters: Filter[];
  headline: string;
  layout: string;
  traces: any[];
  custom_meta: CustomMeta;
  vendors: Vendor[];
}

export interface Filter {
  id: string;
  title: string;
  type: string;
  count: number;
}

export interface CustomMeta {
  custom_layout: string;
}

export interface Vendor {
  vendor: Vendor2;
}

export interface Vendor2 {
  id: number;
  code: string;
  budget: number;
  characteristics: Characteristics2;
  accepts_instructions: boolean;
  delivery_provider: string;
  customer_type: string;
  is_active: boolean;
  is_preorder_enabled: boolean;
  is_best_in_city: boolean;
  tag: string;
  name: string;
  rating: number;
  review_number: number;
  address_line2: string;
  latitude: number;
  longitude: number;
  minimum_order_amount: number;
  minimum_delivery_fee: number;
  minimum_delivery_time: number;
  original_delivery_fee: number;
  delivery_fee_delta: number;
  free_delivery_label: string;
  minimum_pickup_time: number;
  is_vat_visible: boolean;
  is_vat_included_in_product_price: boolean;
  hero_listing_image: string;
  distance: number;
  has_delivery_provider: boolean;
  loyalty_program_enabled: boolean;
  loyalty_percentage_amount: number;
  vertical: string;
  is_premium: boolean;
  ncr_pricing_model: string;
  ncr_token: string;
  preorder_time_offset: any;
  partner_ids: string[];
  metadata: Metadata2;
  tags: Tag2[];
  tile: Tile2;
  chain: Chain2;
  discounts_info: DiscountsInfo2[];
  location_event: any;
  favorite_data: any;
  url_key: string;
  minimum_basket_value_discount: any;
}

export interface Characteristics2 {
  cuisines: Cuisine3[];
  food_characteristics: FoodCharacteristic3[];
  primary_cuisine: PrimaryCuisine2;
}

export interface Cuisine3 {
  id: number;
  name: string;
  url_key: string;
}

export interface FoodCharacteristic3 {
  id: number;
  name: string;
}

export interface PrimaryCuisine2 {
  id: number;
  name: string;
  url_key: string;
}

export interface Metadata2 {
  available_in: any;
  timezone: string;
  close_reasons: any[];
  is_delivery_available: boolean;
  is_pickup_available: boolean;
  is_flood_feature_closed: boolean;
  is_temporary_closed: boolean;
  has_discount: boolean;
  events: any[];
}

export interface Tag2 {
  code: string;
  text: string;
  origin: any;
  label_metadata: any;
}

export interface Tile2 {
  type: string;
  primary_tags?: PrimaryTag2[];
  secondary_tags: SecondaryTag2[];
  vendor_info: VendorInfo2[][];
}

export interface PrimaryTag2 {
  id: any;
  elements: Element4[];
}

export interface Element4 {
  __typename: string;
  icon_id?: string;
  icon_decorators?: any[];
  text_id: any;
  text?: string;
  args?: any[];
  text_decorators?: any[];
}

export interface SecondaryTag2 {
  id: string;
  elements: Element5[];
}

export interface Element5 {
  __typename: string;
  text_id: any;
  text?: string;
  args?: any[];
  text_decorators?: any[];
  icon_id?: string;
  icon_decorators?: any[];
  url?: string;
}

export interface VendorInfo2 {
  id: string;
  elements: Element6[];
}

export interface Element6 {
  __typename: string;
  text_id: any;
  text?: string;
  args?: string[];
  text_decorators?: string[];
  icon_id?: string;
  icon_decorators?: string[];
}

export interface Chain2 {
  code: string;
  name: string;
}

export interface DiscountsInfo2 {
  id: string;
  value: number;
}

export interface Meta {
  config_name: string;
  took: number;
  traces: any[];
}

export interface DynamicSearchbarConfig {
  data: Daum2[];
}

export interface Daum2 {
  type: string;
  message: string;
}
