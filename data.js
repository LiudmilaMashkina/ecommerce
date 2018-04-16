const charities_obj = [{
    id : 1,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_1.png",
    rating : "3.5",
    reviews : []
    },
    {
    id : 2,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_2.jpg",
    rating : "4.9",
    reviews : ["review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 3,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_3.jpg",
    rating : "4.3",
    reviews : []
    },
    {
    id : 4,
    name : "Charity",
    type : "charity",
    preview_img : "src/charity_4.jpg",
    rating : "4.8",
    reviews : ["review-1", "review-2", "review-3", "review-4", "review-1", "review-2", "review-3", "review-4"]
    }
]

const products_obj = [{
    id : "0",
    name : "Robert Steven",
    product_name : "Siphonophore",
    type : "product",
    preview_img : "src/a_robert_connett_Siphonophore.jpg",
    price : 78.70,
    rating : 5.0,
    reviews : ["review-1"]
    },
    {
    id : "1",
    name : "Kurun Warun",
    product_name : "Lines",
    type : "product",
    preview_img : "src/Kurun_Warun_Body_Paint_0.jpg",
    price : 50.70,
    rating : 3.6,
    reviews : ["review-1"]
    },
    {
    id : "2",
    name : "Kurun Warun",
    product_name : "Lines",
    type : "product",
    preview_img : "src/Kurun_Warun_Body_Paint.jpg",
    price : 500,
    rating : 4.9,
    reviews : ["review-1"]
    },
    {
    id : "3",
    name : "Natasha Bowdoin",
    product_name : "Abstraction N3",
    type : "product",
    preview_img : "src/Natasha Bowdoin_3.jpg",
    price : 280,
    rating : 4.2,
    reviews : ["review-1"]
    },
    {
    id : "3",
    name : "Natasha Bowdoin",
    product_name : "Abstraction N56",
    type : "product",
    preview_img : "src/Natasha Bowdoin_2.jpg",
    price : 230,
    rating : 4.1,
    reviews : ["review-1"]
    },
    {
    id : "4",
    name : "Natasha Bowdoin",
    product_name : "Abstraction N98",
    type : "product",
    preview_img : "src/Natasha Bowdoin_1.jpg",
    price : 148,
    rating : 4.7,
    reviews : ["review-1"]
    },
    {
    id : "5",
    name : "Natasha Bowdoin",
    product_name : "Abstraction",
    type : "product",
    preview_img : "src/Natasha Bowdoin_0.jpg",
    price : 200,
    rating : 3.9,
    reviews : ["review-1"]
    },
    {
    id : "6",
    name : "Robert Steven",
    product_name : "Sea Creatures",
    type : "product",
    preview_img : "src/robert_steven_Sea Creatures.jpg",
    price : 1570,
    rating : 4.5,
    reviews : ["review-1"]
    },
    {
    id : "7",
    name : "Dan Seagrave",
    product_name : "Tree",
    type : "product",
    preview_img : "src/dan_seagrave_tree.jpg",
    price : 99.70,
    rating : 3.2,
    reviews : ["review-1"]
    },
    {
    id : "8",
    name : "Dan Seagrave",
    product_name : "Tree",
    type : "product",
    preview_img : "src/dan_seagrave_decimation.jpg",
    price : 250,
    rating : 4.4,
    reviews : ["review-1"]
    },
    {
    id : "9",
    name : "Dan Seagrave",
    product_name : "Decimation 1",
    type : "product",
    preview_img : "src/dan_seagrave_decimation_0.jpg",
    price : 185,
    rating : 4.9,
    reviews : ["review-1"]
    },
    {
    id : "10",
    name : "Dan Seagrave",
    product_name : "Decimation 2",
    type : "product",
    preview_img : "src/Dan Seagrave_1.jpg",
    price : 98,
    rating : 4.1,
    reviews : ["review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "11",
    name : "Dan Seagrave",
    product_name : "Sot",
    type : "product",
    preview_img : "src/Dan Seagrave Sot.jpg",
    price : 108,
    rating : 4.1,
    reviews : ["review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "12",
    name : "Dan Seagrave",
    product_name : "City",
    type : "product",
    preview_img : "src/robert_steven_city.jpg",
    price : 900,
    rating : 4.6,
    reviews : ["review-1", "review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "13",
    name : "Dan Seagrave",
    product_name : "World",
    type : "product",
    preview_img : "src/cover9_detail_den_s.jpg",
    price : 100,
    rating : 4.9,
    reviews : ["review-1", "review-1", "review-1"]
    },
    {
    id : "14",
    name : "Robert Steven",
    product_name : "Nautical",
    type : "product",
    preview_img : "src/nautical-art-fish-art_.jpg",
    price : 110,
    rating : 4.0,
    reviews : ["review-1", "review-1", "review-1", "review-1"]
    },
    {
    id : "15",
    name : "Robert Steven",
    product_name : "Sea Creatures",
    type : "product",
    preview_img : "src/timeline-photos-robert-richard.jpg",
    price : 130,
    rating : 4.4,
    reviews : ["review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1", "review-1"]
    }
]

const artists_obj = [{
    id : 1,
    name : "Natasha Bowdoin",
    type : "artist",
    preview_img : "src/Natasha Bowdoin_artist.jpg",
    rating : "3.8",
    reviews : ["review-1", "review-2", "review-3"]
    },
    {
    id : 2,
    name : "Robert Steven",
    type : "artist",
    preview_img : "src/Robert_Steven_artist.jpg",
    rating : "4.3",
    reviews : ["review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 4,
    name : "Kurun Warun",
    type : "artist",
    preview_img : "src/kurun_warun_artist.jpg",
    rating : "4.1",
    reviews : ["review-1", "review-2", "review-3", "review-4", "review-1", "review-2", "review-3", "review-4"]
    },
    {
    id : 5,
    name : "Dan Seagrave",
    type : "artist",
    preview_img : "src/Dan_Seagrave_artist.jpg",
    rating : "4.7",
    reviews : ["review-1", "review-2", "review-3", "review-4", "review-1", "review-2", "review-3", "review-4"]
    }
]
