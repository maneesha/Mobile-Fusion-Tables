/*!
 * Customization file for Fusion Table Mobile Templates
 * See maps_lib.js for license and repository
 *
 * REPLACE THE SETTINGS BELOW TO REFER TO YOUR OWN DATA.
 *
 * Required:
 * 1. Fusion Table IDs
 *
 * Overrides (optional):
 * 2. Search Settings
 *   - Default is a field for every column if you don't set this
 * 3. Custom Content
 *   - Title
 *   - About Page
 *   - Infobox (popup when you click on a location)
 * 4. Map Preferences
 *   - How It Should Use Your Nearby Location
 */

var MapsLib = MapsLib || {};


  /////////////////////////
  // 1. FUSION TABLE IDs //
  /////////////////////////

  // Using v1 Fusion Tables API
  // See https://developers.google.com/fusiontables/docs/v1/migration_guide for more info

  // The encrypted Table ID of your Fusion Table (found under File => About)
  MapsLib.fusionTableId = "12SZra19zyTFkVWu5BzJacuZgLUZjj1m-bXYCjkY";

  // *New Fusion Tables Requirement* API key. found at https://code.google.com/apis/console/
  // *Important* this key is for demonstration purposes. please register your own.
  MapsLib.googleApiKey ="AIzaSyAt-73WNp-LVpud_sSlwJ7lk73sYSNq_4o";


  // DONE!  YOU COULD DELETE EVERYTHING AFTER THIS POINT AND STILL HAVE A WORKING APP.

  // BELOW ARE CUSTOM OVERRIDES TO MAKE YOUR APP MORE AWESOME.
  // UNCOMMENT EACH SECTION AS YOU GO.


$.extend(MapsLib, {

/*

  ////////////////////////
  // 2. SEARCH SETTINGS //
  ////////////////////////
  
  // By default, you will get a text field for each column.
  // However, you can customize search settings using the following attributes:
  //
  //  - allColumns (default=true):             a text field will appear for each column.
  //
  //  - allColumnsExactMatch (default=false):  allColumns + exact matching of fields.
  //
  //  - addressShow (default=true):            show address field for centering search
  //
  //  - addressAutocomplete:                   autocomplete options for address field (set to false if you don't want autocomplete)
  //     - country (default="US"):             restrict autocomplete to search within said country (2-character country code)
  //     - useDefaultMapBounds (default=true): addresses within defaultMapBounds (see section 4) will be prioritized to the top of autocomplete results
  // 
  //  - distanceFilter: drop-down for restricting search results by distance to address (or nearby).  Comment this out to have no such drop-down.
  //     - filterSearchResults (default=true): limit search results to those within distance
  //     - filterListResults (default=true):   limit list results to those within distance (otherwise they're just ordered nearest-first)
  //     - dropDown:                           array of drop-down entries for distance from address.  Each entry is an array of:
  //          1. drop-down text
  //          2. radius length as "X miles" or "X meters" if the drop-down text wasn't already in this format.
  //          3. true if this is the default selection
  //       - You can specify "0" for radius length to not filter by distance, and leave zoom as-is.
  //
  //  - dropDowns: array of custom drop-downs, where an entry has the following attributes:
  //       - label
  //       - options: array of drop-down entries.  Each entry is an array of:
  //          1. drop-down text
  //          2. Fusion Table SQL-style WHERE clause (overrides template)
  //             - see https://developers.google.com/fusiontables/docs/v1/sql-reference for Fusion Table-friendly WHERE clauses
  //          3. true if this is the default selection
  //       - template (optional): template for WHERE clause, using {text} to insert drop-down text
  //         NOTE: if you use a template, a drop-down entry can be just the drop-down text instead of an array.
  //
  //  - columns: array of column fields, where a field has the following attributes:
  //       - label
  //       - column: name of column
  //       - exact_match (default=false, meaningless if options is specified): look for exact match instead of a contains match
  //       - range (numbers and dates only, default=true): use this if you want a range slider.  Looks up minimum and maximum values for column.
  //
  //  If "allColumns" is true, "columns" will simply override label/match settings for the specified columns
  //  Fields for numerical columns use exact match- they have no support for contains match.
  //    (Create a drop-down to search within ranges in numerical value.)
*/

  searchPage: { 
    allColumns: false,
    //distanceFilter: {},
    addressShow: false,

    dropDowns: [
    {label: "Choose day of week", 
     options: [
       ["Any", "", true],
       ["Monday", "'day' = 'Monday'"],
       ["Tuesday", "'day' = 'Tuesday'"],
       ["Wednesday", "'day'='Wednesday'"], 
       ["Thursday", "'day' = 'Thursday'"],
       ["Friday", "'day' = 'Friday'"],
       ["Saturday", "'day' = 'Saturday'"],
       ["Sunday", "'day' = 'Sunday'"]
    ]},

//Google Fusion Table Column 'season':['year round', 'seasonal']
//Google Fusion Table Column 'closed': ['closed', null]

    {label: "Year round or seasonal",
     options: [
       ["Any", "", true],
       ["Year Round", "'season' = 'year round'"],
       ["Seasonal", "'season' = 'seasonal'"]
    ]},

    //selector to choose to include markets closed for season

    {label: "Choose a vendor", 
     options: [
      ["Any", "", true],
      ["A.T. Buzby Farm", "'vendors' CONTAINS 'A.T. Buzby Farm'"],
      ["Anchor Nursery", "'vendors' CONTAINS 'Anchor Nursery'"],
      ["Apple Tree Goat Dairy", "'vendors' CONTAINS 'Apple Tree Goat Dairy'"],
      ["Beechwood Orchards", "'vendors' CONTAINS 'Beechwood Orchards'"],
      ["Bennet Compost", "'vendors' CONTAINS 'Bennet Compost'"],
      ["Big Sky Bakery", "'vendors' CONTAINS 'Big Sky Bakery'"],
      ["Birchrun Hills", "'vendors' CONTAINS 'Birchrun Hills'"],
      ["Blooming Glen Farm", "'vendors' CONTAINS 'Blooming Glen Farm'"],
      ["Blue Mountain Vineyards", "'vendors' CONTAINS 'Blue Mountain Vineyards'"],
      ["Brogue Hydroponics", "'vendors' CONTAINS 'Brogue Hydroponics'"],
      ["Buckview Produce", "'vendors' CONTAINS 'Buckview Produce'"],
      ["Clay Brick Farms", "'vendors' CONTAINS 'Clay Brick Farms'"],
      ["Countryside Bakery & Farm", "'vendors' CONTAINS 'Countryside Bakery & Farm'"],
      ["Cranberry Creek Farm", "'vendors' CONTAINS 'Cranberry Creek Farm'"],
      ["Culton Farm", "'vendors' CONTAINS 'Culton Farm'"],
      ["Davidsons Exotic Mushrooms", "'vendors' CONTAINS 'Davidsons Exotic Mushrooms'"],
      ["Down to Earth Harvest", "'vendors' CONTAINS 'Down to Earth Harvest'"],
      ["Eden Garden Farm", "'vendors' CONTAINS 'Eden Garden Farm'"],
      ["Fahnestock Fruit Farm", "'vendors' CONTAINS 'Fahnestock Fruit Farm'"],
      ["Farm Truck", "'vendors' CONTAINS 'Farm Truck'"],
      ["Fifth of a Farm", "'vendors' CONTAINS 'Fifth of a Farm'"],
      ["Forest View Bakery", "'vendors' CONTAINS 'Forest View Bakery'"],
      ["Frecon Farms", "'vendors' CONTAINS 'Frecon Farms'"],
      ["FreshaPeel Hummus", "'vendors' CONTAINS 'FreshaPeel Hummus'"],
      ["Fruitwood Farms", "'vendors' CONTAINS 'Fruitwood Farms'"],
      ["Good Spoon", "'vendors' CONTAINS 'Good Spoon'"],
      ["Green Aisle Grocery", "'vendors' CONTAINS 'Green Aisle Grocery'"],
      ["Green Zebra", "'vendors' CONTAINS 'Green Zebra'"],
      ["Griggstown Quail Farm", "'vendors' CONTAINS 'Griggstown Quail Farm'"],
      ["Hands on the Earth Orchard", "'vendors' CONTAINS 'Hands on the Earth Orchard'"],
      ["Herbal Springs Farmstead", "'vendors' CONTAINS 'Herbal Springs Farmstead'"],
      ["Highland Orchards", "'vendors' CONTAINS 'Highland Orchards'"],
      ["Hillacres Pride", "'vendors' CONTAINS 'Hillacres Pride'"],
      ["Hilltop Farm", "'vendors' CONTAINS 'Hilltop Farm'"],
      ["Hoagsland's Farm", "'vendors' CONTAINS 'Hoagsland's Farm'"],
      ["Homestead Garden", "'vendors' CONTAINS 'Homestead Garden'"],
      ["Hurley's Landscaping", "'vendors' CONTAINS 'Hurley's Landscaping'"],
      ["Jennie & Frank Artisan Gelato", "'vendors' CONTAINS 'Jennie & Frank Artisan Gelato'"],
      ["Jennings 1785 Farm", "'vendors' CONTAINS 'Jennings 1785 Farm'"],
      ["Jimmies Cupcake Co.", "'vendors' CONTAINS 'Jimmies Cupcake Co.'"],
      ["John and Kira's", "'vendors' CONTAINS 'John and Kira's'"],
      ["John Esch Produce", "'vendors' CONTAINS 'John Esch Produce'"],
      ["Landisdale Farm", "'vendors' CONTAINS 'Landisdale Farm'"],
      ["Lil Pop Shop", "'vendors' CONTAINS 'Lil Pop Shop'"],
      ["Livengood Family Farm", "'vendors' CONTAINS 'Livengood Family Farm'"],
      ["Local 215", "'vendors' CONTAINS 'Local 215'"],
      ["Lone Wolfe Farm", "'vendors' CONTAINS 'Lone Wolfe Farm'"],
      ["Long View Farm", "'vendors' CONTAINS 'Long View Farm'"],
      ["Los Taquitos de Puebla", "'vendors' CONTAINS 'Los Taquitos de Puebla'"],
      ["Love Bar", "'vendors' CONTAINS 'Love Bar'"],
      ["Lucky Old Souls burger truck", "'vendors' CONTAINS 'Lucky Old Souls burger truck'"],
      ["Made in the Shade", "'vendors' CONTAINS 'Made in the Shade'"],
      ["Margerum Herbs", "'vendors' CONTAINS 'Margerum Herbs'"],
      ["Market Day Canele", "'vendors' CONTAINS 'Market Day Canele'"],
      ["Metropolitan Bakery", "'vendors' CONTAINS 'Metropolitan Bakery'"],
      ["Mill Creek Farm", "'vendors' CONTAINS 'Mill Creek Farm'"],
      ["Mini Trini", "'vendors' CONTAINS 'Mini Trini'"],
      ["Mount Pleasant", "'vendors' CONTAINS 'Mount Pleasant'"],
      ["Neil's Knife Sharpening Service", "'vendors' CONTAINS 'Neil's Knife Sharpening Service'"],
      ["North Star Orchard", "'vendors' CONTAINS 'North Star Orchard'"],
      ["Otolith Sustainable Seafood", "'vendors' CONTAINS 'Otolith Sustainable Seafood'"],
      ["Paradocx Wines", "'vendors' CONTAINS 'Paradocx Wines'"],
      ["Penn Hill Produce Farm", "'vendors' CONTAINS 'Penn Hill Produce Farm'"],
      ["Pennypack Farms", "'vendors' CONTAINS 'Pennypack Farms'"],
      ["Philly Fair Trade Roasters", "'vendors' CONTAINS 'Philly Fair Trade Roasters'"],
      ["Philly Urban Creators", "'vendors' CONTAINS 'Philly Urban Creators'"],
      ["PorcSalt", "'vendors' CONTAINS 'PorcSalt'"],
      ["Primordia Mushrooms", "'vendors' CONTAINS 'Primordia Mushrooms'"],
      ["Quaff Meadows", "'vendors' CONTAINS 'Quaff Meadows'"],
      ["Quarryville Orchard", "'vendors' CONTAINS 'Quarryville Orchard'"],
      ["Queens Farm", "'vendors' CONTAINS 'Queens Farm'"],
      ["Rics Breads", "'vendors' CONTAINS 'Rics Breads'"],
      ["Riehl Family Farm", "'vendors' CONTAINS 'Riehl Family Farm'"],
      ["Rineer Family Farms", "'vendors' CONTAINS 'Rineer Family Farms'"],
      ["Root Mass Farm", "'vendors' CONTAINS 'Root Mass Farm'"],
      ["Sarah Bakes", "'vendors' CONTAINS 'Sarah Bakes'"],
      ["Savoie Organics", "'vendors' CONTAINS 'Savoie Organics'"],
      ["Shenks Berry Farm", "'vendors' CONTAINS 'Shenks Berry Farm'"],
      ["Slow Rise Bakery", "'vendors' CONTAINS 'Slow Rise Bakery'"],
      ["Solly Bros. Farm", "'vendors' CONTAINS 'Solly Bros. Farm'"],
      ["Spring Hills Farm", "'vendors' CONTAINS 'Spring Hills Farm'"],
      ["Stargazers Vineyard", "'vendors' CONTAINS 'Stargazers Vineyard'"],
      ["Stryker Farm", "'vendors' CONTAINS 'Stryker Farm'"],
      ["Talulas Table", "'vendors' CONTAINS 'Talulas Table'"],
      ["Taproot Farm", "'vendors' CONTAINS 'Taproot Farm'"],
      ["Tassot Apiaries", "'vendors' CONTAINS 'Tassot Apiaries'"],
      ["The McCanns Farm", "'vendors' CONTAINS 'The McCanns Farm'"],
      ["Three Springs Fruit Farm", "'vendors' CONTAINS 'Three Springs Fruit Farm'"],
      ["Triple Tree Flowers", "'vendors' CONTAINS 'Triple Tree Flowers'"],
      ["Urban Girls Produce", "'vendors' CONTAINS 'Urban Girls Produce'"],
      ["Urban Nutrition Initiative", "'vendors' CONTAINS 'Urban Nutrition Initiative'"],
      ["Urban Tree Connection/Neighborhood Foods", "'vendors' CONTAINS 'Urban Tree Connection/Neighborhood Foods'"],
      ["vendors not known ", "'vendors' CONTAINS 'vendors not known '"],
      ["Walnut Springs Farm", "'vendors' CONTAINS 'Walnut Springs Farm'"],
      ["Weavers Way Farm", "'vendors' CONTAINS 'Weavers Way Farm'"],
      ["Wild Flour Bakery", "'vendors' CONTAINS 'Wild Flour Bakery'"],
      ["Wonderful Good Market", "'vendors' CONTAINS 'Wonderful Good Market'"],
      ["Wyck House", "'vendors' CONTAINS 'Wyck House'"],
      ["Z Food Farm", "'vendors' CONTAINS 'Z Food Farm'"],
      ["Zea May", "'vendors' CONTAINS 'Zea May'"],
      ["Zsas Gourmet Ice Cream", "'vendors' CONTAINS 'Zsas Gourmet Ice Cream'"]
     ]}
    ]//closes dropDowns list
  },  //closes searchPage:



  ///////////////////////
  // 3. CUSTOM CONTENT //
  ///////////////////////


  // Title bar (including title of website)
  title: "Philadelphia Area Farmers Markets",
  aboutPage: "Find farmers markets in the Philadelphia by location, day of week, or participating vendors. <br><br>I developed this site over a few months in summer - fall 2013, a little bit at a time while my baby son napped. Some data might be incorrect, and t's all based on the 2013 season, and since it's fall now, many markets are closed.  Share any changes <a href='https://docs.google.com/forms/d/1Keh4D0Cj6kvcoVa-uCdt5iLJdHI6TBN0pzTntuG5KVQ/viewform'>here</a> and I'll make them on this site.  <br><br> Also, there are probably some features you wish this map had.  I have some ideas myself but they're not all feasible given my time, my budget, and my skills.  The big one is getting location services to work, so you can find a market near you or near a given address.  But if you want to share any other ideas, feel free to submit those <a href='https://docs.google.com/forms/d/1Keh4D0Cj6kvcoVa-uCdt5iLJdHI6TBN0pzTntuG5KVQ/viewform'>here</a> too and I'll consider them.<br><br>Many thanks to the folks who developed the template for this app: <br> Mobile Fusion Tables was originally based on Derek Eder's Fusion Table Searchable Map Template.  This is an SF Brigade project for Code for America. Started by Mark Brenig-Jones, completed by Rego Sen, with contributions from Sidney Zhang and Andrew Byrne.  Clone the repo <a href='https://github.com/sfbrigade/Mobile-Fusion-Tables'>here</a> to make your own mapping app.  Or contact me to hire me to build it for you.",

   addrMarkerImage:    'http://maps.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png',
/*

  // This will go in your style block.  Useful if customizing your infoboxes.
  customCSS: " \
    .infobox-header, .ui-li-desc, #score-text { font-family: Arial, Helvetica, Geneva, sans-serif; white-space:normal;} \
    .infobox-map { width:220px; height:100px;} \
    .infobox-header { display:inline; padding-right: 10px; } \
    .infobox-subheader { padding-top: 5px; } \
    .moreinfo { margin-left:7px; min-width:18px; position:absolute; \
        top:45%; bottom:45%; min-height:18px; } \
    .score { float:left; font-size:medium; padding:5px; border:1px solid black; margin:2px 7px 5px 0px; } \
    .score.grn_blank { background-color: #00de3c; color: white; } \
    .score.ltblu_blank { background-color: #55d7d7; color: white; } \
    .score.orange_blank { background-color: #ff9c00; color: white; } \
    .score.red_blank { background-color: #fb6155; color: white; } \
  ",

  // customInfoboxHtml can be defined as a string or a function:
  //  STRING:   You can embed Handlebars expressions and variables.
  //  FUNCTION: Returns an HTML string and takes two params: row and isListView
  //  "":       No infobox.
  //  Default (leaving it undefined): falls back on the infobox format from Fusion Table
  //
  //  In either case, the variables are defined as follows:
  //  - row.COLUMN_NAME, returns value for given column in your FusionTable row
  //      - Note: COLUMN_NAME has periods omitted, and spaces replaced with underscores
  //      - Example: to get the value from the "U.S. Entity Type" column, use row.US_Entity_Type
  //  - isListView, which evaluates to:
  //      - false when populating a map infobox
  //      - true when populating a row in the "List" view

  // delimitedColumns (optional): specify delimiter per column, and row.COLUMN_NAME will return an array
  delimitedColumns: {"violations": ";"},
*/

customInfoboxHtml: "<div style='color:black'>  {{#if isListView}} {{row.name}} {{else}} <a href= {{ row.website }} target = '_blank'> {{row.name}} </a> {{/if}} </div> {{#if row.closed_TF }}CLOSED FOR SEASON{{/if}} <br>  {{row.day}} {{row.start_time}} to {{row.end_time}}. <br> <div style = 'white-space:pre-wrap'>{{row.at_place}}</div> {{#if isListView}} <div style='white-space:pre-wrap; color:#484848;'>Vendors: {{row.vendors}} </div> {{/if}}",

/*
  customInfoboxHtml: " \
    {{#if isListView}} \
      <div> \
    {{else}} \
      <div class='infobox-map'> \
    {{/if}} \
    <div class='score {{row.last_score_category}}'><span id='score-text'>{{row.last_score}}</span></div> \
    <h4 class='infobox-header'>{{row.name}}</h4> \
    <p class='ui-li-desc infobox-subheader'> \
    {{#if isListView}} \
      {{row.address}}</p> \
    {{else}} \
      <strong>Last inspected: {{row.last_inspection_date}}</strong> \
      <br>{{row.address}}</p> \
      <p class='ui-li-desc infobox-subheader'><b>Recent violations:</b> \
      {{#if row.violations}} \
        {{#each row.violations}} \
          <br>- {{this}} \
        {{/each}} \
      {{else}} \
        None \
      {{/if}} \
    {{/if}} \
    </p></div>",

  // Infoboxes will also appear (unless blank) on your nearby or search address pins.
  // HTML is OK.  Use "{address}" to denote the entered address for addressPinInfobox.
  nearbyPinInfobox: "You are here.",
  addressPinInfobox: "{address}",
*/


  ////////////////////////
  // 4. MAP PREFERENCES //
  ////////////////////////

/*
  // Override the location column in your Fusion Table (useful if you have multiple columns)
  // NOTE: if you have "latitude" and "longitude" columns, just use "latitude"

*/
  locationColumn:     "latitude",
/*
  // Center and zoom radius that your map defaults to when location services are off.
  // If useDefaultMapBounds is true (see section 2), this also determines which addresses get priority with autocomplete
  */
  defaultMapBounds: {

    // Use [latitude, longitude] or address
    center: "Philadelphia, PA",

    // "X miles" or "X meters"
    radius: "6 miles"
  },

  // Set useNearbyLocation to false if you don't want to get the user's location.
  useNearbyLocation: {
    startAtNearbyLocation:     true,

    // If true: use nearby location only if we're within default map bounds
    //          otherwise, post boundsExceededMessage (if non-empty) and use mapDefaultCenter.
    onlyWithinDefaultMapBounds: true,
    boundsExceededMessage:      "Your location is far away from Philadelphia.  Defaulting to city limits.",

    // use this zoom radius if starting at nearby location
    nearbyZoomRadius:           "1000 meters",

    // Snap to nearby zoom radius when user hits "Nearby"?  Options are:
    // true             = always snap to zoom level
    // false (default)  = never snap to zoom level
    // int              = snap to zoom level if ratio between current and nearby zoom radii
    //                      is greater than this (in either direction)
    snapToNearbyZoomIfRatioGreaterThan: true
  },
  map_centroid: new google.maps.LatLng(39.952, -75.163)


});
