// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Tax `Transaction` records the tax collected from or refunded to your customer.
     */
    interface TaxTransaction {
      /**
       * Unique identifier for the transaction.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax.transaction';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
       */
      customer: string | null;

      customer_details: TaxTransaction.CustomerDetails;

      /**
       * The tax collected or refunded, by line item.
       */
      line_items: ApiList<Stripe.LineItem> | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * A custom unique identifier, such as 'myOrder_123'.
       */
      reference: string;

      /**
       * If `type=reversal`, contains information about what was reversed.
       */
      reversal: TaxTransaction.Reversal | null;

      /**
       * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
       */
      tax_date: number;

      /**
       * If `reversal`, this transaction reverses an earlier transaction.
       */
      type: TaxTransaction.Type;
    }

    namespace TaxTransaction {
      interface CustomerDetails {
        /**
         * The customer's postal address (e.g., home or business location).
         */
        address: Stripe.Address | null;

        /**
         * The type of customer address provided.
         */
        address_source: CustomerDetails.AddressSource | null;

        /**
         * The customer's IP address (IPv4 or IPv6).
         */
        ip_address: string | null;

        /**
         * The customer's tax IDs (e.g., EU VAT numbers).
         */
        tax_ids: Array<CustomerDetails.TaxId>;
      }

      namespace CustomerDetails {
        type AddressSource = 'billing' | 'shipping';

        interface TaxId {
          /**
           * The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `eu_oss_vat`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, or `unknown`
           */
          type: TaxId.Type;

          /**
           * The value of the tax ID.
           */
          value: string;
        }

        namespace TaxId {
          type Type =
            | 'ae_trn'
            | 'au_abn'
            | 'au_arn'
            | 'bg_uic'
            | 'br_cnpj'
            | 'br_cpf'
            | 'ca_bn'
            | 'ca_gst_hst'
            | 'ca_pst_bc'
            | 'ca_pst_mb'
            | 'ca_pst_sk'
            | 'ca_qst'
            | 'ch_vat'
            | 'cl_tin'
            | 'eg_tin'
            | 'es_cif'
            | 'eu_oss_vat'
            | 'eu_vat'
            | 'gb_vat'
            | 'ge_vat'
            | 'hk_br'
            | 'hu_tin'
            | 'id_npwp'
            | 'il_vat'
            | 'in_gst'
            | 'is_vat'
            | 'jp_cn'
            | 'jp_rn'
            | 'jp_trn'
            | 'ke_pin'
            | 'kr_brn'
            | 'li_uid'
            | 'mx_rfc'
            | 'my_frp'
            | 'my_itn'
            | 'my_sst'
            | 'no_vat'
            | 'nz_gst'
            | 'ph_tin'
            | 'ru_inn'
            | 'ru_kpp'
            | 'sa_vat'
            | 'sg_gst'
            | 'sg_uen'
            | 'si_tin'
            | 'th_vat'
            | 'tr_tin'
            | 'tw_vat'
            | 'ua_vat'
            | 'unknown'
            | 'us_ein'
            | 'za_vat';
        }
      }

      interface Reversal {
        /**
         * The `id` of the `Transaction` object that this one reversed.
         */
        original_transaction: string | null;
      }

      type Type = 'reversal' | 'transaction';
    }
  }
}
