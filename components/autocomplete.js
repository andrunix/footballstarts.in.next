import { useState, useEffect } from 'react';

// const teams = [{"name":"cincinnati","values":["Cincinnati","Bearcats (Cincinnati)"]},{"name":"connecticut","values":["Connecticut","Huskies (Connecticut)"]},{"name":"eastcarolina","values":["East Carolina","Pirates (East Carolina)"]},{"name":"houston","values":["Houston","Cougars (Houston)"]},{"name":"memphis","values":["Memphis","Tigers (Memphis)"]},{"name":"navy","values":["Navy","Midshipmen (Navy)"]},{"name":"smu","values":["SMU","Mustangs (SMU)"]},{"name":"southflorida","values":["South Florida","Bulls (South Florida)"]},{"name":"temple","values":["Temple","Owls (Temple)"]},{"name":"tulane","values":["Tulane","Green Wave (Tulane)"]},{"name":"tulsa","values":["Tulsa","Golden Hurricane (Tulsa)"]},{"name":"ucf","values":["UCF","Knights (UCF)"]},{"name":"bostoncollege","values":["Boston College","Eagles (Boston College)"]},{"name":"clemson","values":["Clemson","Tigers (Clemson)"]},{"name":"duke","values":["Duke","Blue Devils (Duke)"]},{"name":"floridastate","values":["Florida State","Seminoles (Florida State)"]},{"name":"georgiatech","values":["Georgia Tech","Yellow Jackets (Georgia Tech)"]},{"name":"louisville","values":["Louisville","Cardinals (Louisville)"]},{"name":"miami","values":["Miami","Hurricanes (Miami)"]},{"name":"ncstate","values":["NC State","Wolfpack (NC State)"]},{"name":"northcarolina","values":["North Carolina","Tar Heels (North Carolina)"]},{"name":"pittsburgh","values":["Pittsburgh","Panthers (Pittsburgh)"]},{"name":"syracuse","values":["Syracuse","Orange (Syracuse)"]},{"name":"virginia","values":["Virginia","Cavaliers (Virginia)"]},{"name":"virginiatech","values":["Virginia Tech","Hokies (Virginia Tech)"]},{"name":"wakeforest","values":["Wake Forest","Demon Deacons (Wake Forest)"]},{"name":"baylor","values":["Baylor","Bears (Baylor)"]},{"name":"iowastate","values":["Iowa State","Cyclones (Iowa State)"]},{"name":"kansas","values":["Kansas","Jayhawks (Kansas)"]},{"name":"kansasstate","values":["Kansas State","Wildcats (Kansas State)"]},{"name":"oklahoma","values":["Oklahoma","Sooners (Oklahoma)"]},{"name":"oklahomastate","values":["Oklahoma State","Cowboys (Oklahoma State)"]},{"name":"tcu","values":["TCU","Horned Frogs (TCU)"]},{"name":"texas","values":["Texas","Longhorns (Texas)"]},{"name":"texastech","values":["Texas Tech","Red Raiders (Texas Tech)"]},{"name":"westvirginia","values":["West Virginia","Mountaineers (West Virginia)"]},{"name":"illinois","values":["Illinois","Fighting Illini (Illinois)"]},{"name":"indiana","values":["Indiana","Hoosiers (Indiana)"]},{"name":"iowa","values":["Iowa","Hawkeyes (Iowa)"]},{"name":"maryland","values":["Maryland","Terrapins (Maryland)"]},{"name":"michigan","values":["Michigan","Wolverines (Michigan)"]},{"name":"michiganstate","values":["Michigan State","Spartans (Michigan State)"]},{"name":"minnesota","values":["Minnesota","Golden Gophers (Minnesota)"]},{"name":"nebraska","values":["Nebraska","Cornhuskers (Nebraska)"]},{"name":"northwestern","values":["Northwestern","Wildcats (Northwestern)"]},{"name":"ohiostate","values":["Ohio State","Buckeyes (Ohio State)"]},{"name":"pennstate","values":["Penn State","Nittany Lions (Penn State)"]},{"name":"purdue","values":["Purdue","Boilermakers (Purdue)"]},{"name":"rutgers","values":["Rutgers","Scarlet Knights (Rutgers)"]},{"name":"wisconsin","values":["Wisconsin","Badgers (Wisconsin)"]},{"name":"charlotte","values":["Charlotte","49ers (Charlotte)"]},{"name":"floridaatlantic","values":["Florida Atlantic","Owls (Florida Atlantic)"]},{"name":"floridainternational","values":["Florida International","Golden Panthers (Florida International)"]},{"name":"louisianatech","values":["Louisiana Tech","Bulldogs (Louisiana Tech)"]},{"name":"marshall","values":["Marshall","Thundering Herd (Marshall)"]},{"name":"middletennessee","values":["Middle Tennessee","Blue Raiders (Middle Tennessee)"]},{"name":"northtexas","values":["North Texas","Mean Green (North Texas)"]},{"name":"olddominion","values":["Old Dominion","Monarchs (Old Dominion)"]},{"name":"rice","values":["Rice","Owls (Rice)"]},{"name":"southernmississippi","values":["Southern Mississippi","Golden Eagles (Southern Mississippi)"]},{"name":"uab","values":["UAB","Blazers (UAB)"]},{"name":"utep","values":["UTEP","Miners (UTEP)"]},{"name":"utsanantonio","values":["UT San Antonio","Roadrunners (UT San Antonio)"]},{"name":"westernkentucky","values":["Western Kentucky","Hilltoppers (Western Kentucky)"]},{"name":"army","values":["Army","Black Knights (Army)"]},{"name":"byu","values":["BYU","Cougars (BYU)"]},{"name":"notredame","values":["Notre Dame","Fighting Irish (Notre Dame)"]},{"name":"umass","values":["UMass","Minutemen (UMass)"]},{"name":"akron","values":["Akron","Zips (Akron)"]},{"name":"ballstate","values":["Ball State","Cardinals (Ball State)"]},{"name":"bowlinggreen","values":["Bowling Green","Falcons (Bowling Green)"]},{"name":"buffalo","values":["Buffalo","Bulls (Buffalo)"]},{"name":"centralmichigan","values":["Central Michigan","Chippewas (Central Michigan)"]},{"name":"easternmichigan","values":["Eastern Michigan","Eagles (Eastern Michigan)"]},{"name":"kentstate","values":["Kent State","Golden Flashes (Kent State)"]},{"name":"miami-oh","values":["Miami (OH)","RedHawks (Miami (OH))"]},{"name":"northernillinois","values":["Northern Illinois","Huskies (Northern Illinois)"]},{"name":"ohio","values":["Ohio","Bobcats (Ohio)"]},{"name":"toledo","values":["Toledo","Rockets (Toledo)"]},{"name":"westernmichigan","values":["Western Michigan","Broncos (Western Michigan)"]},{"name":"airforce","values":["Air Force","Falcons (Air Force)"]},{"name":"boisestate","values":["Boise State","Broncos (Boise State)"]},{"name":"coloradostate","values":["Colorado State","Rams (Colorado State)"]},{"name":"fresnostate","values":["Fresno State","Bulldogs (Fresno State)"]},{"name":"hawaii","values":["Hawai'i","Rainbow Warriors (Hawai'i)"]},{"name":"nevada","values":["Nevada","Wolf Pack (Nevada)"]},{"name":"newmexico","values":["New Mexico","Lobos (New Mexico)"]},{"name":"sandiegostate","values":["San Diego State","Aztecs (San Diego State)"]},{"name":"sanjosestate","values":["San José State","Spartans (San José State)"]},{"name":"unlv","values":["UNLV","Rebels (UNLV)"]},{"name":"utahstate","values":["Utah State","Aggies (Utah State)"]},{"name":"wyoming","values":["Wyoming","Cowboys (Wyoming)"]},{"name":"arizona","values":["Arizona","Wildcats (Arizona)"]},{"name":"arizonastate","values":["Arizona State","Sun Devils (Arizona State)"]},{"name":"california","values":["California","Golden Bears (California)"]},{"name":"colorado","values":["Colorado","Buffaloes (Colorado)"]},{"name":"oregon","values":["Oregon","Ducks (Oregon)"]},{"name":"oregonstate","values":["Oregon State","Beavers (Oregon State)"]},{"name":"stanford","values":["Stanford","Cardinal (Stanford)"]},{"name":"ucla","values":["UCLA","Bruins (UCLA)"]},{"name":"usc","values":["USC","Trojans (USC)"]},{"name":"utah","values":["Utah","Utes (Utah)"]},{"name":"washington","values":["Washington","Huskies (Washington)"]},{"name":"washingtonstate","values":["Washington State","Cougars (Washington State)"]},{"name":"appalachianstate","values":["Appalachian State","Mountaineers (Appalachian State)"]},{"name":"arkansasstate","values":["Arkansas State","Red Wolves (Arkansas State)"]},{"name":"coastalcarolina","values":["Coastal Carolina","Chanticleers (Coastal Carolina)"]},{"name":"georgiasouthern","values":["Georgia Southern","Eagles (Georgia Southern)"]},{"name":"georgiastate","values":["Georgia State","Panthers (Georgia State)"]},{"name":"louisiana","values":["Louisiana","Ragin' Cajuns (Louisiana)"]},{"name":"louisianamonroe","values":["Louisiana Monroe","Warhawks (Louisiana Monroe)"]},{"name":"southalabama","values":["South Alabama","Jaguars (South Alabama)"]},{"name":"texasstate","values":["Texas State","Bobcats (Texas State)"]},{"name":"troy","values":["Troy","Trojans (Troy)"]},{"name":"alabama","values":["Alabama","Crimson Tide (Alabama)"]},{"name":"arkansas","values":["Arkansas","Razorbacks (Arkansas)"]},{"name":"auburn","values":["Auburn","Tigers (Auburn)"]},{"name":"florida","values":["Florida","Gators (Florida)"]},{"name":"georgia","values":["Georgia","Bulldogs (Georgia)"]},{"name":"kentucky","values":["Kentucky","Wildcats (Kentucky)"]},{"name":"lsu","values":["LSU","Tigers (LSU)"]},{"name":"mississippistate","values":["Mississippi State","Bulldogs (Mississippi State)"]},{"name":"missouri","values":["Missouri","Tigers (Missouri)"]},{"name":"olemiss","values":["Ole Miss","Rebels (Ole Miss)"]},{"name":"southcarolina","values":["South Carolina","Gamecocks (South Carolina)"]},{"name":"tennessee","values":["Tennessee","Volunteers (Tennessee)"]},{"name":"texasam","values":["Texas A&M","Aggies (Texas A&M)"]},{"name":"vanderbilt","values":["Vanderbilt","Commodores (Vanderbilt)"]}];

const teams = [
  {
    "name": "boston-college",
    "value": "Boston College"
  },
  {
    "name": "boston-college",
    "value": "Eagles (Boston College)"
  },
  {
    "name": "clemson",
    "value": "Clemson"
  },
  {
    "name": "clemson",
    "value": "Tigers (Clemson)"
  },
  {
    "name": "duke",
    "value": "Duke"
  },
  {
    "name": "duke",
    "value": "Blue Devils (Duke)"
  },
  {
    "name": "florida-state",
    "value": "Florida State"
  },
  {
    "name": "florida-state",
    "value": "Seminoles (Florida State)"
  },
  {
    "name": "georgia-tech",
    "value": "Georgia Tech"
  },
  {
    "name": "georgia-tech",
    "value": "Yellow Jackets (Georgia Tech)"
  },
  {
    "name": "louisville",
    "value": "Louisville"
  },
  {
    "name": "louisville",
    "value": "Cardinals (Louisville)"
  },
  {
    "name": "miami",
    "value": "Miami"
  },
  {
    "name": "miami",
    "value": "Hurricanes (Miami)"
  },
  {
    "name": "nc-state",
    "value": "NC State"
  },
  {
    "name": "nc-state",
    "value": "Wolfpack (NC State)"
  },
  {
    "name": "north-carolina",
    "value": "North Carolina"
  },
  {
    "name": "north-carolina",
    "value": "Tar Heels (North Carolina)"
  },
  {
    "name": "pittsburgh",
    "value": "Pittsburgh"
  },
  {
    "name": "pittsburgh",
    "value": "Panthers (Pittsburgh)"
  },
  {
    "name": "syracuse",
    "value": "Syracuse"
  },
  {
    "name": "syracuse",
    "value": "Orange (Syracuse)"
  },
  {
    "name": "virginia",
    "value": "Virginia"
  },
  {
    "name": "virginia",
    "value": "Cavaliers (Virginia)"
  },
  {
    "name": "virginia-tech",
    "value": "Virginia Tech"
  },
  {
    "name": "virginia-tech",
    "value": "Hokies (Virginia Tech)"
  },
  {
    "name": "wake-forest",
    "value": "Wake Forest"
  },
  {
    "name": "wake-forest",
    "value": "Demon Deacons (Wake Forest)"
  },
  {
    "name": "baylor",
    "value": "Baylor"
  },
  {
    "name": "baylor",
    "value": "Bears (Baylor)"
  },
  {
    "name": "iowa-state",
    "value": "Iowa State"
  },
  {
    "name": "iowa-state",
    "value": "Cyclones (Iowa State)"
  },
  {
    "name": "kansas",
    "value": "Kansas"
  },
  {
    "name": "kansas",
    "value": "Jayhawks (Kansas)"
  },
  {
    "name": "kansas-state",
    "value": "Kansas State"
  },
  {
    "name": "kansas-state",
    "value": "Wildcats (Kansas State)"
  },
  {
    "name": "oklahoma",
    "value": "Oklahoma"
  },
  {
    "name": "oklahoma",
    "value": "Sooners (Oklahoma)"
  },
  {
    "name": "oklahoma-state",
    "value": "Oklahoma State"
  },
  {
    "name": "oklahoma-state",
    "value": "Cowboys (Oklahoma State)"
  },
  {
    "name": "tcu",
    "value": "TCU"
  },
  {
    "name": "tcu",
    "value": "Horned Frogs (TCU)"
  },
  {
    "name": "texas",
    "value": "Texas"
  },
  {
    "name": "texas",
    "value": "Longhorns (Texas)"
  },
  {
    "name": "texas-tech",
    "value": "Texas Tech"
  },
  {
    "name": "texas-tech",
    "value": "Red Raiders (Texas Tech)"
  },
  {
    "name": "west-virginia",
    "value": "West Virginia"
  },
  {
    "name": "west-virginia",
    "value": "Mountaineers (West Virginia)"
  },
  {
    "name": "illinois",
    "value": "Illinois"
  },
  {
    "name": "illinois",
    "value": "Fighting Illini (Illinois)"
  },
  {
    "name": "indiana",
    "value": "Indiana"
  },
  {
    "name": "indiana",
    "value": "Hoosiers (Indiana)"
  },
  {
    "name": "iowa",
    "value": "Iowa"
  },
  {
    "name": "iowa",
    "value": "Hawkeyes (Iowa)"
  },
  {
    "name": "maryland",
    "value": "Maryland"
  },
  {
    "name": "maryland",
    "value": "Terrapins (Maryland)"
  },
  {
    "name": "michigan",
    "value": "Michigan"
  },
  {
    "name": "michigan",
    "value": "Wolverines (Michigan)"
  },
  {
    "name": "michigan-state",
    "value": "Michigan State"
  },
  {
    "name": "michigan-state",
    "value": "Spartans (Michigan State)"
  },
  {
    "name": "minnesota",
    "value": "Minnesota"
  },
  {
    "name": "minnesota",
    "value": "Golden Gophers (Minnesota)"
  },
  {
    "name": "nebraska",
    "value": "Nebraska"
  },
  {
    "name": "nebraska",
    "value": "Cornhuskers (Nebraska)"
  },
  {
    "name": "northwestern",
    "value": "Northwestern"
  },
  {
    "name": "northwestern",
    "value": "Wildcats (Northwestern)"
  },
  {
    "name": "ohio-state",
    "value": "Ohio State"
  },
  {
    "name": "ohio-state",
    "value": "Buckeyes (Ohio State)"
  },
  {
    "name": "penn-state",
    "value": "Penn State"
  },
  {
    "name": "penn-state",
    "value": "Nittany Lions (Penn State)"
  },
  {
    "name": "purdue",
    "value": "Purdue"
  },
  {
    "name": "purdue",
    "value": "Boilermakers (Purdue)"
  },
  {
    "name": "rutgers",
    "value": "Rutgers"
  },
  {
    "name": "rutgers",
    "value": "Scarlet Knights (Rutgers)"
  },
  {
    "name": "wisconsin",
    "value": "Wisconsin"
  },
  {
    "name": "wisconsin",
    "value": "Badgers (Wisconsin)"
  },
  {
    "name": "alabama",
    "value": "Alabama"
  },
  {
    "name": "alabama",
    "value": "Crimson Tide (Alabama)"
  },
  {
    "name": "arkansas",
    "value": "Arkansas"
  },
  {
    "name": "arkansas",
    "value": "Razorbacks (Arkansas)"
  },
  {
    "name": "auburn",
    "value": "Auburn"
  },
  {
    "name": "auburn",
    "value": "Tigers (Auburn)"
  },
  {
    "name": "florida",
    "value": "Florida"
  },
  {
    "name": "florida",
    "value": "Gators (Florida)"
  },
  {
    "name": "georgia",
    "value": "Georgia"
  },
  {
    "name": "georgia",
    "value": "Bulldogs (Georgia)"
  },
  {
    "name": "kentucky",
    "value": "Kentucky"
  },
  {
    "name": "kentucky",
    "value": "Wildcats (Kentucky)"
  },
  {
    "name": "lsu",
    "value": "LSU"
  },
  {
    "name": "lsu",
    "value": "Tigers (LSU)"
  },
  {
    "name": "mississippi-state",
    "value": "Mississippi State"
  },
  {
    "name": "mississippi-state",
    "value": "Bulldogs (Mississippi State)"
  },
  {
    "name": "missouri",
    "value": "Missouri"
  },
  {
    "name": "missouri",
    "value": "Tigers (Missouri)"
  },
  {
    "name": "ole-miss",
    "value": "Ole Miss"
  },
  {
    "name": "ole-miss",
    "value": "Rebels (Ole Miss)"
  },
  {
    "name": "south-carolina",
    "value": "South Carolina"
  },
  {
    "name": "south-carolina",
    "value": "Gamecocks (South Carolina)"
  },
  {
    "name": "tennessee",
    "value": "Tennessee"
  },
  {
    "name": "tennessee",
    "value": "Volunteers (Tennessee)"
  },
  {
    "name": "texas-a-m",
    "value": "Texas A&M"
  },
  {
    "name": "texas-a-m",
    "value": "Aggies (Texas A&M)"
  },
  {
    "name": "vanderbilt",
    "value": "Vanderbilt"
  },
  {
    "name": "vanderbilt",
    "value": "Commodores (Vanderbilt)"
  },
  {
    "name": "arizona",
    "value": "Arizona"
  },
  {
    "name": "arizona",
    "value": "Wildcats (Arizona)"
  },
  {
    "name": "arizona-state",
    "value": "Arizona State"
  },
  {
    "name": "arizona-state",
    "value": "Sun Devils (Arizona State)"
  },
  {
    "name": "california",
    "value": "California"
  },
  {
    "name": "california",
    "value": "Golden Bears (California)"
  },
  {
    "name": "colorado",
    "value": "Colorado"
  },
  {
    "name": "colorado",
    "value": "Buffaloes (Colorado)"
  },
  {
    "name": "oregon",
    "value": "Oregon"
  },
  {
    "name": "oregon",
    "value": "Ducks (Oregon)"
  },
  {
    "name": "oregon-state",
    "value": "Oregon State"
  },
  {
    "name": "oregon-state",
    "value": "Beavers (Oregon State)"
  },
  {
    "name": "stanford",
    "value": "Stanford"
  },
  {
    "name": "stanford",
    "value": "Cardinal (Stanford)"
  },
  {
    "name": "ucla",
    "value": "UCLA"
  },
  {
    "name": "ucla",
    "value": "Bruins (UCLA)"
  },
  {
    "name": "usc",
    "value": "USC"
  },
  {
    "name": "usc",
    "value": "Trojans (USC)"
  },
  {
    "name": "utah",
    "value": "Utah"
  },
  {
    "name": "utah",
    "value": "Utes (Utah)"
  },
  {
    "name": "washington",
    "value": "Washington"
  },
  {
    "name": "washington",
    "value": "Huskies (Washington)"
  },
  {
    "name": "washington-state",
    "value": "Washington State"
  },
  {
    "name": "washington-state",
    "value": "Cougars (Washington State)"
  },
  {
    "name": "charlotte",
    "value": "Charlotte"
  },
  {
    "name": "charlotte",
    "value": "49ers (Charlotte)"
  },
  {
    "name": "florida-atlantic",
    "value": "Florida Atlantic"
  },
  {
    "name": "florida-atlantic",
    "value": "Owls (Florida Atlantic)"
  },
  {
    "name": "florida-international",
    "value": "Florida International"
  },
  {
    "name": "florida-international",
    "value": "Golden Panthers (Florida International)"
  },
  {
    "name": "louisiana-tech",
    "value": "Louisiana Tech"
  },
  {
    "name": "louisiana-tech",
    "value": "Bulldogs (Louisiana Tech)"
  },
  {
    "name": "marshall",
    "value": "Marshall"
  },
  {
    "name": "marshall",
    "value": "Thundering Herd (Marshall)"
  },
  {
    "name": "middle-tennessee",
    "value": "Middle Tennessee"
  },
  {
    "name": "middle-tennessee",
    "value": "Blue Raiders (Middle Tennessee)"
  },
  {
    "name": "north-texas",
    "value": "North Texas"
  },
  {
    "name": "north-texas",
    "value": "Mean Green (North Texas)"
  },
  {
    "name": "old-dominion",
    "value": "Old Dominion"
  },
  {
    "name": "old-dominion",
    "value": "Monarchs (Old Dominion)"
  },
  {
    "name": "rice",
    "value": "Rice"
  },
  {
    "name": "rice",
    "value": "Owls (Rice)"
  },
  {
    "name": "southern-mississippi",
    "value": "Southern Mississippi"
  },
  {
    "name": "southern-mississippi",
    "value": "Golden Eagles (Southern Mississippi)"
  },
  {
    "name": "uab",
    "value": "UAB"
  },
  {
    "name": "uab",
    "value": "Blazers (UAB)"
  },
  {
    "name": "utep",
    "value": "UTEP"
  },
  {
    "name": "utep",
    "value": "Miners (UTEP)"
  },
  {
    "name": "ut-san-antonio",
    "value": "UT San Antonio"
  },
  {
    "name": "ut-san-antonio",
    "value": "Roadrunners (UT San Antonio)"
  },
  {
    "name": "western-kentucky",
    "value": "Western Kentucky"
  },
  {
    "name": "western-kentucky",
    "value": "Hilltoppers (Western Kentucky)"
  },
  {
    "name": "akron",
    "value": "Akron"
  },
  {
    "name": "akron",
    "value": "Zips (Akron)"
  },
  {
    "name": "ball-state",
    "value": "Ball State"
  },
  {
    "name": "ball-state",
    "value": "Cardinals (Ball State)"
  },
  {
    "name": "bowling-green",
    "value": "Bowling Green"
  },
  {
    "name": "bowling-green",
    "value": "Falcons (Bowling Green)"
  },
  {
    "name": "buffalo",
    "value": "Buffalo"
  },
  {
    "name": "buffalo",
    "value": "Bulls (Buffalo)"
  },
  {
    "name": "central-michigan",
    "value": "Central Michigan"
  },
  {
    "name": "central-michigan",
    "value": "Chippewas (Central Michigan)"
  },
  {
    "name": "eastern-michigan",
    "value": "Eastern Michigan"
  },
  {
    "name": "eastern-michigan",
    "value": "Eagles (Eastern Michigan)"
  },
  {
    "name": "kent-state",
    "value": "Kent State"
  },
  {
    "name": "kent-state",
    "value": "Golden Flashes (Kent State)"
  },
  {
    "name": "miami-oh",
    "value": "Miami (OH)"
  },
  {
    "name": "miami-oh",
    "value": "RedHawks (Miami (OH))"
  },
  {
    "name": "northern-illinois",
    "value": "Northern Illinois"
  },
  {
    "name": "northern-illinois",
    "value": "Huskies (Northern Illinois)"
  },
  {
    "name": "ohio",
    "value": "Ohio"
  },
  {
    "name": "ohio",
    "value": "Bobcats (Ohio)"
  },
  {
    "name": "toledo",
    "value": "Toledo"
  },
  {
    "name": "toledo",
    "value": "Rockets (Toledo)"
  },
  {
    "name": "western-michigan",
    "value": "Western Michigan"
  },
  {
    "name": "western-michigan",
    "value": "Broncos (Western Michigan)"
  },
  {
    "name": "air-force",
    "value": "Air Force"
  },
  {
    "name": "air-force",
    "value": "Falcons (Air Force)"
  },
  {
    "name": "boise-state",
    "value": "Boise State"
  },
  {
    "name": "boise-state",
    "value": "Broncos (Boise State)"
  },
  {
    "name": "colorado-state",
    "value": "Colorado State"
  },
  {
    "name": "colorado-state",
    "value": "Rams (Colorado State)"
  },
  {
    "name": "fresno-state",
    "value": "Fresno State"
  },
  {
    "name": "fresno-state",
    "value": "Bulldogs (Fresno State)"
  },
  {
    "name": "hawaii",
    "value": "Hawai'i"
  },
  {
    "name": "hawaii",
    "value": "Rainbow Warriors (Hawai'i)"
  },
  {
    "name": "nevada",
    "value": "Nevada"
  },
  {
    "name": "nevada",
    "value": "Wolf Pack (Nevada)"
  },
  {
    "name": "new-mexico",
    "value": "New Mexico"
  },
  {
    "name": "new-mexico",
    "value": "Lobos (New Mexico)"
  },
  {
    "name": "san-diego-state",
    "value": "San Diego State"
  },
  {
    "name": "san-diego-state",
    "value": "Aztecs (San Diego State)"
  },
  {
    "name": "san-jose-state",
    "value": "San José State"
  },
  {
    "name": "san-jose-state",
    "value": "Spartans (San José State)"
  },
  {
    "name": "unlv",
    "value": "UNLV"
  },
  {
    "name": "unlv",
    "value": "Rebels (UNLV)"
  },
  {
    "name": "utah-state",
    "value": "Utah State"
  },
  {
    "name": "utah-state",
    "value": "Aggies (Utah State)"
  },
  {
    "name": "wyoming",
    "value": "Wyoming"
  },
  {
    "name": "wyoming",
    "value": "Cowboys (Wyoming)"
  },
  {
    "name": "army",
    "value": "Army"
  },
  {
    "name": "army",
    "value": "Black Knights (Army)"
  },
  {
    "name": "byu",
    "value": "BYU"
  },
  {
    "name": "byu",
    "value": "Cougars (BYU)"
  },
  {
    "name": "liberty",
    "value": "Liberty"
  },
  {
    "name": "liberty",
    "value": "Flames (Liberty)"
  },
  {
    "name": "new-mexico-state",
    "value": "New Mexico State"
  },
  {
    "name": "new-mexico-state",
    "value": "Aggies (New Mexico State)"
  },
  {
    "name": "notre-dame",
    "value": "Notre Dame"
  },
  {
    "name": "notre-dame",
    "value": "Fighting Irish (Notre Dame)"
  },
  {
    "name": "umass",
    "value": "UMass"
  },
  {
    "name": "umass",
    "value": "Minutemen (UMass)"
  },
  {
    "name": "appalachian-state",
    "value": "Appalachian State"
  },
  {
    "name": "appalachian-state",
    "value": "Mountaineers (Appalachian State)"
  },
  {
    "name": "arkansas-state",
    "value": "Arkansas State"
  },
  {
    "name": "arkansas-state",
    "value": "Red Wolves (Arkansas State)"
  },
  {
    "name": "coastal-carolina",
    "value": "Coastal Carolina"
  },
  {
    "name": "coastal-carolina",
    "value": "Chanticleers (Coastal Carolina)"
  },
  {
    "name": "georgia-southern",
    "value": "Georgia Southern"
  },
  {
    "name": "georgia-southern",
    "value": "Eagles (Georgia Southern)"
  },
  {
    "name": "georgia-state",
    "value": "Georgia State"
  },
  {
    "name": "georgia-state",
    "value": "Panthers (Georgia State)"
  },
  {
    "name": "louisiana",
    "value": "Louisiana"
  },
  {
    "name": "louisiana",
    "value": "Ragin' Cajuns (Louisiana)"
  },
  {
    "name": "louisiana-monroe",
    "value": "Louisiana Monroe"
  },
  {
    "name": "louisiana-monroe",
    "value": "Warhawks (Louisiana Monroe)"
  },
  {
    "name": "south-alabama",
    "value": "South Alabama"
  },
  {
    "name": "south-alabama",
    "value": "Jaguars (South Alabama)"
  },
  {
    "name": "texas-state",
    "value": "Texas State"
  },
  {
    "name": "texas-state",
    "value": "Bobcats (Texas State)"
  },
  {
    "name": "troy",
    "value": "Troy"
  },
  {
    "name": "troy",
    "value": "Trojans (Troy)"
  },
  {
    "name": "cincinnati",
    "value": "Cincinnati"
  },
  {
    "name": "cincinnati",
    "value": "Bearcats (Cincinnati)"
  },
  {
    "name": "connecticut",
    "value": "Connecticut"
  },
  {
    "name": "connecticut",
    "value": "Huskies (Connecticut)"
  },
  {
    "name": "east-carolina",
    "value": "East Carolina"
  },
  {
    "name": "east-carolina",
    "value": "Pirates (East Carolina)"
  },
  {
    "name": "houston",
    "value": "Houston"
  },
  {
    "name": "houston",
    "value": "Cougars (Houston)"
  },
  {
    "name": "memphis",
    "value": "Memphis"
  },
  {
    "name": "memphis",
    "value": "Tigers (Memphis)"
  },
  {
    "name": "navy",
    "value": "Navy"
  },
  {
    "name": "navy",
    "value": "Midshipmen (Navy)"
  },
  {
    "name": "smu",
    "value": "SMU"
  },
  {
    "name": "smu",
    "value": "Mustangs (SMU)"
  },
  {
    "name": "south-florida",
    "value": "South Florida"
  },
  {
    "name": "south-florida",
    "value": "Bulls (South Florida)"
  },
  {
    "name": "temple",
    "value": "Temple"
  },
  {
    "name": "temple",
    "value": "Owls (Temple)"
  },
  {
    "name": "tulane",
    "value": "Tulane"
  },
  {
    "name": "tulane",
    "value": "Green Wave (Tulane)"
  },
  {
    "name": "tulsa",
    "value": "Tulsa"
  },
  {
    "name": "tulsa",
    "value": "Golden Hurricane (Tulsa)"
  },
  {
    "name": "ucf",
    "value": "UCF"
  },
  {
    "name": "ucf",
    "value": "Knights (UCF)"
  }
];

export default function Autocomplete() {
  const [searchTeam, setSearchTeam] = useState('');
  const [searchMatches, setSearchMatches] = useState([]);
  const [currentFocus, setCurrentFocus] = useState(-1);

  const findMatches = (val) => {
    let results = [];
      const matches = teams.filter(v => v.value.toLowerCase().indexOf(val.toLowerCase()) >= 0);
      results = matches;
    return results;
  };

  const itemClicked = (event) => {
    const team = event.target.getAttribute('data-name');
    window.location.href = `${window.location.origin}/teams/${team}`;
  };

  const handleInput = (event) => {
    setCurrentFocus(-1);
    setSearchTeam(event.target.value);
    if (event.target.value) {
      const matches = findMatches(event.target.value);
      setSearchMatches(matches);
    } else {
      setSearchMatches([]);
    }
  };
  
  const handleKeyDown = (event) => {
    if (event.keyCode == 40) {
        setCurrentFocus(currentFocus + 1);
    } else if (event.keyCode == 38) { //up
        setCurrentFocus(currentFocus - 1);
    } else if (event.keyCode == 27) {
      setSearchMatches([]);
    } else if (event.keyCode == 13) {
        // If the ENTER key is pressed, prevent the form from being submitted
        event.preventDefault();
        if (currentFocus > -1) {
          const url = `${window.location.origin}/teams/${searchMatches[currentFocus].name}`;
          document.location = url;
        }
    }
  }

  return (
    <>
      <input type="text" className="text-xl text-gray-800 -p2 rounded-md"
        id="searchtext"
        placeholder="team name"  
        onInput={(e) => handleInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        />
        <div id="searchtextautocomplete-list" className="autocomplete-items shadow-lg rounded-lg">
          {searchMatches.map((match, idx) => (
            <div key={idx} 
              className={currentFocus === idx ? "autocomplete-active" : ""}
              data-name={match.name} 
              onClick={(e) => itemClicked(e)}>
              {match.value}
            </div>
          ))}
        </div>
      </>
  );
}

