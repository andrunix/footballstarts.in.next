import { useState } from 'react';

const teams = [{"name":"cincinnati","values":["Cincinnati","Bearcats (Cincinnati)"]},{"name":"connecticut","values":["Connecticut","Huskies (Connecticut)"]},{"name":"eastcarolina","values":["East Carolina","Pirates (East Carolina)"]},{"name":"houston","values":["Houston","Cougars (Houston)"]},{"name":"memphis","values":["Memphis","Tigers (Memphis)"]},{"name":"navy","values":["Navy","Midshipmen (Navy)"]},{"name":"smu","values":["SMU","Mustangs (SMU)"]},{"name":"southflorida","values":["South Florida","Bulls (South Florida)"]},{"name":"temple","values":["Temple","Owls (Temple)"]},{"name":"tulane","values":["Tulane","Green Wave (Tulane)"]},{"name":"tulsa","values":["Tulsa","Golden Hurricane (Tulsa)"]},{"name":"ucf","values":["UCF","Knights (UCF)"]},{"name":"bostoncollege","values":["Boston College","Eagles (Boston College)"]},{"name":"clemson","values":["Clemson","Tigers (Clemson)"]},{"name":"duke","values":["Duke","Blue Devils (Duke)"]},{"name":"floridastate","values":["Florida State","Seminoles (Florida State)"]},{"name":"georgiatech","values":["Georgia Tech","Yellow Jackets (Georgia Tech)"]},{"name":"louisville","values":["Louisville","Cardinals (Louisville)"]},{"name":"miami","values":["Miami","Hurricanes (Miami)"]},{"name":"ncstate","values":["NC State","Wolfpack (NC State)"]},{"name":"northcarolina","values":["North Carolina","Tar Heels (North Carolina)"]},{"name":"pittsburgh","values":["Pittsburgh","Panthers (Pittsburgh)"]},{"name":"syracuse","values":["Syracuse","Orange (Syracuse)"]},{"name":"virginia","values":["Virginia","Cavaliers (Virginia)"]},{"name":"virginiatech","values":["Virginia Tech","Hokies (Virginia Tech)"]},{"name":"wakeforest","values":["Wake Forest","Demon Deacons (Wake Forest)"]},{"name":"baylor","values":["Baylor","Bears (Baylor)"]},{"name":"iowastate","values":["Iowa State","Cyclones (Iowa State)"]},{"name":"kansas","values":["Kansas","Jayhawks (Kansas)"]},{"name":"kansasstate","values":["Kansas State","Wildcats (Kansas State)"]},{"name":"oklahoma","values":["Oklahoma","Sooners (Oklahoma)"]},{"name":"oklahomastate","values":["Oklahoma State","Cowboys (Oklahoma State)"]},{"name":"tcu","values":["TCU","Horned Frogs (TCU)"]},{"name":"texas","values":["Texas","Longhorns (Texas)"]},{"name":"texastech","values":["Texas Tech","Red Raiders (Texas Tech)"]},{"name":"westvirginia","values":["West Virginia","Mountaineers (West Virginia)"]},{"name":"illinois","values":["Illinois","Fighting Illini (Illinois)"]},{"name":"indiana","values":["Indiana","Hoosiers (Indiana)"]},{"name":"iowa","values":["Iowa","Hawkeyes (Iowa)"]},{"name":"maryland","values":["Maryland","Terrapins (Maryland)"]},{"name":"michigan","values":["Michigan","Wolverines (Michigan)"]},{"name":"michiganstate","values":["Michigan State","Spartans (Michigan State)"]},{"name":"minnesota","values":["Minnesota","Golden Gophers (Minnesota)"]},{"name":"nebraska","values":["Nebraska","Cornhuskers (Nebraska)"]},{"name":"northwestern","values":["Northwestern","Wildcats (Northwestern)"]},{"name":"ohiostate","values":["Ohio State","Buckeyes (Ohio State)"]},{"name":"pennstate","values":["Penn State","Nittany Lions (Penn State)"]},{"name":"purdue","values":["Purdue","Boilermakers (Purdue)"]},{"name":"rutgers","values":["Rutgers","Scarlet Knights (Rutgers)"]},{"name":"wisconsin","values":["Wisconsin","Badgers (Wisconsin)"]},{"name":"charlotte","values":["Charlotte","49ers (Charlotte)"]},{"name":"floridaatlantic","values":["Florida Atlantic","Owls (Florida Atlantic)"]},{"name":"floridainternational","values":["Florida International","Golden Panthers (Florida International)"]},{"name":"louisianatech","values":["Louisiana Tech","Bulldogs (Louisiana Tech)"]},{"name":"marshall","values":["Marshall","Thundering Herd (Marshall)"]},{"name":"middletennessee","values":["Middle Tennessee","Blue Raiders (Middle Tennessee)"]},{"name":"northtexas","values":["North Texas","Mean Green (North Texas)"]},{"name":"olddominion","values":["Old Dominion","Monarchs (Old Dominion)"]},{"name":"rice","values":["Rice","Owls (Rice)"]},{"name":"southernmississippi","values":["Southern Mississippi","Golden Eagles (Southern Mississippi)"]},{"name":"uab","values":["UAB","Blazers (UAB)"]},{"name":"utep","values":["UTEP","Miners (UTEP)"]},{"name":"utsanantonio","values":["UT San Antonio","Roadrunners (UT San Antonio)"]},{"name":"westernkentucky","values":["Western Kentucky","Hilltoppers (Western Kentucky)"]},{"name":"army","values":["Army","Black Knights (Army)"]},{"name":"byu","values":["BYU","Cougars (BYU)"]},{"name":"notredame","values":["Notre Dame","Fighting Irish (Notre Dame)"]},{"name":"umass","values":["UMass","Minutemen (UMass)"]},{"name":"akron","values":["Akron","Zips (Akron)"]},{"name":"ballstate","values":["Ball State","Cardinals (Ball State)"]},{"name":"bowlinggreen","values":["Bowling Green","Falcons (Bowling Green)"]},{"name":"buffalo","values":["Buffalo","Bulls (Buffalo)"]},{"name":"centralmichigan","values":["Central Michigan","Chippewas (Central Michigan)"]},{"name":"easternmichigan","values":["Eastern Michigan","Eagles (Eastern Michigan)"]},{"name":"kentstate","values":["Kent State","Golden Flashes (Kent State)"]},{"name":"miami-oh","values":["Miami (OH)","RedHawks (Miami (OH))"]},{"name":"northernillinois","values":["Northern Illinois","Huskies (Northern Illinois)"]},{"name":"ohio","values":["Ohio","Bobcats (Ohio)"]},{"name":"toledo","values":["Toledo","Rockets (Toledo)"]},{"name":"westernmichigan","values":["Western Michigan","Broncos (Western Michigan)"]},{"name":"airforce","values":["Air Force","Falcons (Air Force)"]},{"name":"boisestate","values":["Boise State","Broncos (Boise State)"]},{"name":"coloradostate","values":["Colorado State","Rams (Colorado State)"]},{"name":"fresnostate","values":["Fresno State","Bulldogs (Fresno State)"]},{"name":"hawaii","values":["Hawai'i","Rainbow Warriors (Hawai'i)"]},{"name":"nevada","values":["Nevada","Wolf Pack (Nevada)"]},{"name":"newmexico","values":["New Mexico","Lobos (New Mexico)"]},{"name":"sandiegostate","values":["San Diego State","Aztecs (San Diego State)"]},{"name":"sanjosestate","values":["San José State","Spartans (San José State)"]},{"name":"unlv","values":["UNLV","Rebels (UNLV)"]},{"name":"utahstate","values":["Utah State","Aggies (Utah State)"]},{"name":"wyoming","values":["Wyoming","Cowboys (Wyoming)"]},{"name":"arizona","values":["Arizona","Wildcats (Arizona)"]},{"name":"arizonastate","values":["Arizona State","Sun Devils (Arizona State)"]},{"name":"california","values":["California","Golden Bears (California)"]},{"name":"colorado","values":["Colorado","Buffaloes (Colorado)"]},{"name":"oregon","values":["Oregon","Ducks (Oregon)"]},{"name":"oregonstate","values":["Oregon State","Beavers (Oregon State)"]},{"name":"stanford","values":["Stanford","Cardinal (Stanford)"]},{"name":"ucla","values":["UCLA","Bruins (UCLA)"]},{"name":"usc","values":["USC","Trojans (USC)"]},{"name":"utah","values":["Utah","Utes (Utah)"]},{"name":"washington","values":["Washington","Huskies (Washington)"]},{"name":"washingtonstate","values":["Washington State","Cougars (Washington State)"]},{"name":"appalachianstate","values":["Appalachian State","Mountaineers (Appalachian State)"]},{"name":"arkansasstate","values":["Arkansas State","Red Wolves (Arkansas State)"]},{"name":"coastalcarolina","values":["Coastal Carolina","Chanticleers (Coastal Carolina)"]},{"name":"georgiasouthern","values":["Georgia Southern","Eagles (Georgia Southern)"]},{"name":"georgiastate","values":["Georgia State","Panthers (Georgia State)"]},{"name":"louisiana","values":["Louisiana","Ragin' Cajuns (Louisiana)"]},{"name":"louisianamonroe","values":["Louisiana Monroe","Warhawks (Louisiana Monroe)"]},{"name":"southalabama","values":["South Alabama","Jaguars (South Alabama)"]},{"name":"texasstate","values":["Texas State","Bobcats (Texas State)"]},{"name":"troy","values":["Troy","Trojans (Troy)"]},{"name":"alabama","values":["Alabama","Crimson Tide (Alabama)"]},{"name":"arkansas","values":["Arkansas","Razorbacks (Arkansas)"]},{"name":"auburn","values":["Auburn","Tigers (Auburn)"]},{"name":"florida","values":["Florida","Gators (Florida)"]},{"name":"georgia","values":["Georgia","Bulldogs (Georgia)"]},{"name":"kentucky","values":["Kentucky","Wildcats (Kentucky)"]},{"name":"lsu","values":["LSU","Tigers (LSU)"]},{"name":"mississippistate","values":["Mississippi State","Bulldogs (Mississippi State)"]},{"name":"missouri","values":["Missouri","Tigers (Missouri)"]},{"name":"olemiss","values":["Ole Miss","Rebels (Ole Miss)"]},{"name":"southcarolina","values":["South Carolina","Gamecocks (South Carolina)"]},{"name":"tennessee","values":["Tennessee","Volunteers (Tennessee)"]},{"name":"texasam","values":["Texas A&M","Aggies (Texas A&M)"]},{"name":"vanderbilt","values":["Vanderbilt","Commodores (Vanderbilt)"]}];

export default function Autocomplete() {
  const [searchTeam, setSearchTeam] = useState('');
  const [searchMatches, setSearchMatches] = useState([]);

  const findMatches = (val) => {
    const results = [];
    for(const t of teams) {
        const matches = t.values.filter(v => v.toLowerCase().indexOf(val.toLowerCase()) >= 0);
        if (matches.length > 0) {
            results.push({ name: t.name, values: matches });
        }
    }
    return results;
  };

  const itemClicked = (event) => {
    console.log('Clicked item: ', event.target.getAttribute('data-name'));
    
  }


  const handleSubmit = () => {
    console.log('Searching for ', searchTeam);
  }

  const handler = (event) => {
    console.log('event.code', event);

    // do some handling of the enter, backspace, etc here....

    if (event.code === 'Enter') {
      console.log('You pressed enter!');
      handleSubmit();
    } else {
      setSearchTeam(event.target.value);

      if (event.target.value) {
        console.log(`Searching for ${event.target.value}`);
        const matches = findMatches(event.target.value);
        console.log(matches.map(m => m.name).join(','));
        setSearchMatches(matches);
      }
    }
  }

  return (
    <>
      <input type="text" className="text-xl align-right"
        id="searchtext"
        placeholder="team name"  
        onInput={(e) => handler(e)}
        />
        <div id="searchtextautocomplete-list" className="autocomplete-items" >
          

          {searchMatches.map((match) => (
            match.values.map((val) => (
            <div key={val} data-name={match.name} onClick={(e) => itemClicked(e)}>
              {val}
            </div>
            ))
          ))}
        </div>
      </>
  )

}

