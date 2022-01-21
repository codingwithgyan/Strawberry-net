var data = [
    {
      Brand: "BOTTEGA VENETA",
      Title: "Eau De Parfum Spray",
      Image: "https://a.cdnsbn.com/images/products/250/13101119406.jpg",
      Price: "10,592",
      Size: "75ml/2.5oz",
      Discount: 13,
      Details: `A chypre floral fragrance for contemporary women
              Strong, elegant, sensual, feminine & charismatic
              Top notes of plum, bergamot & pink pepper
              Heart notes of Sambac jasmine, oakmoss & patchouli
              Base note of leather accord
              Launched in 2011 as the first fragrance of Bottega Veneta
              Perfect for all occasions`,
    },
    {
      Brand: "DOLCE & GABBANA",
      Title: "Pour Femme Eau De Parfum Spray",
      Image: "https://a.cdnsbn.com/images/products/14877939506.jpg",
      Price: "3,766",
      Size: "50ml/1.6oz",
      Discount: 49,
      Details: `A floral fruity fragrance for contemporary women
              Soft, sweet, feminine, warm & seductive
              Top notes of neroli, raspberry & tangerine
              Heart notes of jasmine & orange blossom
              Base notes of marshmallow, vanilla, sandalwood & heliotrope
              Launched in 2012
              Perfect for all occasions`,
    },
    {
      Brand: "L'ARTISAN PARFUMEUR",
      Title: "L'Eau D'Ambre Eau De Toilette Spray",
      Image: "https://a.cdnsbn.com/images/products/21565015137.jpg",
      Price: "7,493",
      Size: "100ml/3.4oz",
      Discount: 44,
      Details: `An oriental fragrance for contemporary women
              Sweet, warm, sensual, inviting & long-lasting
              Contains notes of amber, patchouli, vanilla & geranium
              Perfect for all occasions`,
    },
    {
      Brand: "SEBASTIAN",
      Title: "Seb Man The Protector Shaving Cream",
      Image: "https://a.cdnsbn.com/images/products/24493901139.jpg",
      Price: "1,059",
      Size: "135g/4.7oz",
      Discount: 25,
      Details: `A protective shaving cream for men
              Helps protect skin against nicks & cuts
              Ensures a close & gentle shave
              Infused with a stimulating scent of bergamot & pink pepper for a vibrant freshness
              Leaves skin feeling softer & smoother post shave
              Perfect for all beard types`,
    },
    {
      Brand: "BVLGARI",
      Title: "Petits Et Mamans Eau De Toilette Spray",
      Image: "https://a.cdnsbn.com/images/products/02144435006.jpg",
      Price: "4,315",
      Size: "100ml/3.3oz",
      Discount: 5,
      Details: `A joyful fragrance for sharing by children & their mothers
              Delivers warmth, freshness, love & intimacy
              Characterized by an original chamomile & talc note,
              Combines sunny feel of Sicilian bergamot & orange
              Ideal for day & causal wear`,
    },
    {
      Brand: "SHISEIDO",
      Title:
        "Ultimune Power Infusing Concentrate",
      Image: "https://a.cdnsbn.com/images/products/27004281414.jpg",
      Price: "10,317",
      Size: "2pcs",
      Discount: 6,
      Details: `Ultimune Power Infusing Concentrate - ImuGeneration Technology (Ginza Edition) 75ml (Free: Natural Beauty BIO UP Treatment Essence 200ml):
      1x Shiseido Ultimune Power Infusing Concentrate - ImuGeneration Technology (Ginza Edition) - 75ml/2.5oz
      1x Natural Beauty BIO UP a-GG Golden Yeast Skin Activating Treatment Essence - 200ml/6.76oz
      Ideal both for personal use & as a gift`,
    },
    {
      Brand: "LALIQUE",
      Title: "Encre Noire Eau De Toilette Spray",
      Image: "https://a.cdnsbn.com/images/products/26296970037.jpg",
      Price: "3,609",
      Size: "100ml/3.4oz",
      Discount: 63,
      Details: `A woody aromatic fragrance for confident men
              Embodies a touch of seduction & masculinity
              Top notes are dominated by cypress
              Middle notes revolve around vetiver
              Base notes are musk & cashmere wood`,
    },
    {
      Brand: "CLINIQUE",
      Title:
        "Moisture Surge 72-Hour Auto-Replenishing Hydrator",
      Image: "https://a.cdnsbn.com/images/products/25682680401.jpg",
      Price: "3,334",
      Size: "75ml/2.5oz",
      Discount: 21,
      Details: `An enhanced, long-lasting facial moisturizer
              Features a refreshing gel-cream texture
              Uses New Auto-Replenishing Technology with caffeine to trigger skin's own rehydration system
              Contains Hyaluronic Acid fragments & Activated Aloe Water to plump skin with moisture
              Infused with humectants & polymers to reduce water loss
              Provides 72 hours of non-stop hydration, even after cleansing
              Unveils a dewier, softer, smoother, soothed & healthier looking complexion
              Free of parabens, phthalates & fragrance`,
    },
    {
      Brand: "SHISEIDO",
      Title: "Bio Performance LiftDynamic Eye Treatment",
      Image: "https://a.cdnsbn.com/images/products/21069581401.jpg",
      Price: "5,884",
      Size: "15ml/0.52oz",
      Discount: 8,
      Details: `A multi-action anti-aging eye cream
              Features a lightweight, non-sticky texture that dissolves quickly into skin
              Developed with exclusive TruStructivTM technology to promote skin's natural restorative powers
              Contains Super Bio-Hyaluronic Acid Plus to replenish skin with deep moisture
              Features RenoCycle System to improve the appearance of skin
              Infused with Bio-Defining Complex to intensively improve visible wrinkles in the eye area
              Fades dark circles while restoring skin elasticity
              Reveals a smoother, more lifted, sculpted & younger looking eye area
              Dermatologist- & ophthalmologist-tested`,
    },
    {
      Brand: "BRITNEY SPEARS",
      Title: "Fantasy Eau De Parfum Spray",
      Image: "https://a.cdnsbn.com/images/products/04691729706.jpg",
      Price: "4,001",
      Size: "100ml/3.4oz",
      Discount: 15,
      Details: `A truly superb fragrance for modern women
              Playful, tempting & sensual
              Begins with an enticing mix of lush red lychee, golden quince & exotic kiwi
              Laced with yummy Cupcake Accord, Jasmine Petals & sexy White Chocolate Orchid
              Finishes with Creamy Musk, Enchanted Orris Root & Woods
              Perfect for special occasions`,
    },
    {
      Brand: "MARC JACOBS",
      Title: "Daisy Spring Eau De Toilette Spray",
      Image: "https://a.cdnsbn.com/images/products/26191478406.jpg",
      Price: "5,963",
      Size: "50ml/1.7oz",
      Discount: 12,
      Details: `An aromatic spicy fragrance for modern women
              Crisp, sweet, green, watery, warm & cheerful
              Top note is Rose
              Middle note is Palisander Rosewood
              Base note is Cardamom
              Launched in 2020
              Suitable for daytime or warmer seasons wear`,
    },
    {
      Brand: "MONTBLANC",
      Title: "Signature Eau De Parfum Spray",
      Image: "https://a.cdnsbn.com/images/products/25596876006.jpg",
      Price: "4,825",
      Size: "50ml/1.7oz",
      Discount: 5,
      Details: `An oriental floral fragrance for modern women
              Crisp, sweet, spicy, powdery, warm, feminine & appealing
              Top note is Clementine
              Middle notes are Magnolia, Ylang-Ylang & Peony
              Base notes are Vanilla, White Musk & Benzoin
              Launched in 2020
              Perfect for all occasions`,
    },
    {
      Brand: "GUERLAIN",
      Title:
        "Abeille Royale Night Cream",
      Image: "https://a.cdnsbn.com/images/products/24305380701.jpg",
      Price: "10,709",
      Size: "50ml/1.6oz",
      Discount: 25,
      Details: `A high-potency anti-aging night cream
              Balm-like texture dissolves gently into skin without leaving a greasy film
              Combines BlackBee Repair technology & a Vitamin E derivative to combat slackening skin
              Reduces the appearance of wrinkles & fine lines
              Keeps skin firmer, smoother, re-defined & younger-looking
              Suitable for all skin types, even sensitive`,
    },
    {
      Brand: "LANCOME",
      Title: "Genifique Advanced Youth Activating Concentrate",
      Image: "https://a.cdnsbn.com/images/products/24200080901.jpg",
      Price: "12,161",
      Size: "100ml/3.38oz",
      Discount: 12,
      Details: `A newly-improved, fast-acting & anti-aging facial serum
              Powered by 10% Bifidus Prebiotic, an active ingredient that targets the key signs of youth in in just seven days
              Helps stimulate skin surface recovery & strengthens its moisture barrier
              The exclusive self-loading dropper delivers the perfect amount of serum with each application
              Unveils firmer, softer, smoother, more elastic & radiant skin
              Perfect for all skin types`,
    },
    {
      Brand: "FILORGA",
      Title: "Time-Filler Night Multi-Correction Wrinkles",
      Image: "https://a.cdnsbn.com/images/products/24038670901.jpg",
      Price: "3,099",
      Size: "50ml/1.69oz",
      Discount: 56,
      Details: `A multi-correcting, anti-wrinkle night cream
              Features a velvety cream-gel texture
              Powered by a hexapeptide to reduce the appearance of contraction wrinkles
              Combines a potent collagen booster with encapsulated Hyaluronic Acid to visibly plump deep wrinkles
              Contains exfoliating gluconolactone plus a peeling-effect active ingredient to smooth surface wrinkles
              Infused with a plant extract that retains water to sustainably fill in dehydration lines
              Restores a fresher, brighter, rested & rejuvenated complexion as you wake up`,
    },
    {
      Brand: "ADDICTION",
      Title: "Cheek Polish",
      Image: "https://a.cdnsbn.com/images/products/26739472402.jpg",
      Price: "2,282.50",
      Size: "12ml/0.4oz",
      Discount: 8,
      Details: `A liquid blush that melts into skin for a natural finish
           Smooth texture is easy to blend & build for the desired beautiful colour
           Contains rosehip oil & lavender oil to hydrate & soothe skin
           Features a firm, easy-to-use brush
           Fragrance-free`,
    },
    {
      Brand: "NARS",
      Title: "Light Reflecting Pressed Setting Powder",
      Image: "https://a.cdnsbn.com/images/products/24780602602.jpg",
      Price: "4,092.50",
      Size: "10g/0.35oz",
      Discount: 8,
      Details: `An invisible pressed setting powder
           Features a silky weightless texture for even application & easy blending
           Helps enhance the look of foundation without a trace of color
           Developed with Photochromic Technology to diffuse light & adjust to new sources of light
           Optically blurs the appearance of fine lines, wrinkles & pores
           Contains microfine mineral powders featuring glycerin & anti-oxidant vitamin E
           Helps shield skin against dryness & comfort skin all day
           Controls shine & prolongs makeup wear
           Gives a smooth, moist, flawless & translucent finish`,
    },
    {
      Brand: "CAFE CAFE",
      Title: "Cafe Cafe Eau De Parfum Spray",
      Image: "https://a.cdnsbn.com/images/products/00944146206.jpg",
      Price: `1,456.00`,
      Size: "100ml/3.3oz",
      Discount: 38,
      Details: `Contains lily of the valley, jasmine, bergamot
           With notes of amber, sandalwood and vanilla
           Warm and inviting
           Perfect for day or evening wear`,
    },
    {
      Brand: "CALVIN KLEIN",
      Title: "CK One Deodorant Stick",
      Image: "https://a.cdnsbn.com/images/products/03460684003.jpg",
      Price: `1,849.50`,
      Size: "75ml/2.5oz",
      Discount: 8,
      Details: `An effective & perfumed deodorant
           Offers long-lasting protection against odor & wetness
           Infused with a sensuous fragrance to uplift the mood
           Leaves skin clean, refreshed & comfortable
           Suitable for all skin types`,
    },
    {
      Brand: "ADIDAS",
      Title: "Champions League After Shave (Champions Edition)",
      Image: "https://a.cdnsbn.com/images/products/26672793005.jpg",
      Price: `748.00`,
      Size: "100ml/3.4oz",
      Discount: 52,
      Details: `A fragranced after-shave for men
           Instantly soothes & calms just-shaved skin
           Reduces razor-burns & prolongs a clean shave
           Infused with a sensuous fragrance to uplift the mood
           Leaves skin fresh & comfortable
           Suitable for all skin types`,
    },
    {
      Brand: "AERIN",
      Title: "Aegea Blossom Eau De Parfum Spray",
      Image: "https://a.cdnsbn.com/images/products/25017234806.jpg",
      Price: `10,191.00`,
      Size: "50ml/1.7oz",
      Discount: 4,
      Details: `A floral woody fragrance for modern women
           Inspired by the blue sea, cool breezes & pure light of Greece
           Crisp, clean, sweet, vibrant, powdery & joyful
           Top notes of bergamot & verbena
           Heart notes of jasmine, orange flower & neroli petals
           Base notes of musk & sandalwood
           Launched in 2018
           Perfect for all occasions`,
    },
    {
      Brand: "AHAVA",
      Title: "Deadsea Water Mineral Hand Cream",
      Image: "https://a.cdnsbn.com/images/products/05620595303.jpg",
      Price: `1,574.00`,
      Size: "100ml/3.4oz",
      Discount: 17,
      Details: `Formulated with unique Mineral Skin Osmoter
       And a wealth of other natural Dead Sea ingredients
       Soothes hands with deep nourishment & hydration
       Non-greasy, instantly calms chapped, dry surfaces
       Restores vitality for supple, softer & younger-looking hands
       Perfect for sensitive skin
       Hypoallergenic & dermatologist tested`,
    },
    {
      Brand: "AIGNER",
      Title: "First Class Eau De Toilette Spray",
      Image: "https://a.cdnsbn.com/images/products/25284257205.jpg",
      Price: `2,912.00`,
      Size: "100ml/3.4oz",
      Discount: 47,
      Details: `A woody chypre fragrance for modern men
       Fresh, spicy, sweet, earthy, elegant & charismatic
       Top notes of grapefruit, bergamot & apple
       Middle notes of pink pepper, melon & jasmine
       Base notes of patchouli, vetiver, amber & oak moss
       Launched in 2016
       Perfect for all occasions`,
    },
    {
      Brand: "ALGENIST",
      Title: "GENIUS Liquid Collagen",
      Image: "https://a.cdnsbn.com/images/products/23503738901.jpg",
      Price: `5,430.00`,
      Size: "30ml/1oz",
      Discount: 40,
      Details: `A vegan, plant-based collagen facial treatment
           Contains the highest concentration of active collagen to quickly restore skin's bounce & resilience
           Rich in naturally sourced & sustainably produced Microalgae Oil for nourishing benefits
           Strengthens skin matrix while deeply replenishing
           Skin looks softer, smoother, brighter & younger looking`,
    },
    {
      Brand: "ANTHONY",
      Title: "Logistics For Men Deodorant",
      Image: "https://a.cdnsbn.com/images/products/11615910021.jpg",
      Price: `1,535.00`,
      Size: "70g/2.5oz",
      Discount: 2,
      Details: `An energizing, clean-smelling deodorant for men
               With an alcohol-free formula
               Maintains a fresh smelling & sensation for body throughout the day`,
    },
    {
      Brand: "AMOUAGE",
      Title: "Ciel Eau De Parfum Spray",
      Image: "https://a.cdnsbn.com/images/products/14777122206.jpg",
      Price: `17,824.50`,
      Size: "100ml/3.4oz",
      Discount: 33,
      Details: `A floral fragrance for modern women
               Crisp, soft, gentle, feminine & enchanting
               Top notes are cyclamen, gardenia & violet leaf
               Middle notes are peach blossom, jasmine, water lily & rose
               Base notes are sandalwood, amber, musk, incense & cedar
               Perfect for all occasions`,
    },
    {
      Brand: "BIJAN",
      Title: "Eau De Toilette Spray",
      Image: "https://a.cdnsbn.com/images/products/02956177905.jpg",
      Price: `2,007.00`,
      Size: "75ml/2.5oz",
      Discount: 57,
      Details: `Sexy and spontaneous scent
                   Top note: Bergamot, Lavender, Green Note
                   Middle note: Gardenia, Pepper, Ginger
                   Base note: Sandalwood, vertiver , Incense, Musk
                   Suitable for daytime wear`,
    },
    {
      Brand: "CLARINS",
      Title: "Hand & Nail Treatment Cream",
      Image: "https://a.cdnsbn.com/images/products/01313880303.jpg",
      Price: `2,282.50`,
      Size: "100ml/3.3oz",
      Discount: 3,
      Details: `Indispensable hand and nail treatment cream
                   Protects hands against chapping and irritation
                   Moisturizes hands
                   Strengthens nails
                   Minimizes existing age spots`,
    },
    // {
    //   Brand: "PETER THOMAS ROTH",
    //   Title: "Mega-Rich Body Lotion",
    //   Image: "https://a.cdnsbn.com/images/products/17378929203.jpg",
    //   Price: `1,298.50`,
    //   Size: "235ml/8oz",
    //   Discount: 8,
    //   Details: `A high-performance, vitamin-packed body lotion
    //                Contains anti-oxidants Vitamins C & E to protect skin against free radical damage
    //                Blended with Pro Vitamin B5 to condition & nourish skin
    //                Immediately soothes & comforts dehydrated skin
    //                Body skin appears softer, smoother, fresher & revitalized
    //                Suitable for daytime wear`,
    // },
    // {
    //   Brand: "BIOSILK",
    //   Title: "Silk Therapy Original",
    //   Image: "https://a.cdnsbn.com/images/products/18415600344.jpg",
    //   Price: `2,007.00`,
    //   Size: "167ml/5.64oz",
    //   Discount: 11,
    //   Details: `A feather-light, leave-in silk treatment for all hair types
    //                Incredibly replenishes & regenerates hair
    //                Strengthens hair inside out & repairs split ends
    //                Protects hair from pollution, UV & external aggression
    //                Nourishes hair without adding weight
    //                Leaves hair smooth, shiny & healthy`,
    // },
  ];



