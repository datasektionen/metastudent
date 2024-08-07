const Committees = () => {
    return (
        <div className="committees">
            <ChapterBelonging belonging="CS-Media committees"/>
            <div className="committee-info">
                <CommitteeName name="International Committee" />
                <InternationalCommittee />

                <CommitteeName name="Qulture Committee"/>
                <QultureCommittee/>

                <CommitteeName name="METAdorerna"/>
                <METAdorerna/>

                <CommitteeName name="MetaSpexet"/>
                <MetaSpexet/>
            </div>

            <ChapterBelonging belonging="CS committees"/>
            <div className="committee-info">
                <CommitteeName name={"Equality Committee"}/>
                <EqualityCommittee/>

                <CommitteeName name={"DKM"}/>
                <DKM/>
            </div>

            <ChapterBelonging belonging="Media committees"/>
            <div className="committee-info">
                <CommitteeName name="MKM"/>
                <MKM/>
            </div>
        </div>
    );
}

function ChapterBelonging({belonging}) {
    return(
        <h2>{belonging}</h2>
    );
}

function CommitteeName({name}) {
    return(
        <h3>{name}</h3>
    );
}

const InternationalCommittee = () => {
    return(
        //
        <p>
            The International Committee (Swedish: Internationella Nämnden, IN) is the committee in META that 
            welcomes international students, make events for them, and helps them to participate in Computer 
            Science and Media Technology chapters. The committee also provides a platform for Swedish students
            The committee is open to any META student, whether from CS or Media, international or Swedish student.
            We often have collaborations with other committees.
            <br/>
            Our usual meeting time is 12:15 on Mondays. You can talk to us on
            our <a href="https://dsekt.se/whatsapp">WhatsApp group</a> to get more info and talk to international
            sutdents.
            <br/>
            Oh, also, we are the one who maintain this website ;).
        </p>
    )
}

function QultureCommittee() {
    return(
        <p>
            The Qulture Committee (Swedish: Qulturnämnden, QN) is the committee focusing on <i>qulture</i> events (yes,
            with a q!). Come past 17:15 in META every Tuesday to play board games at what is called QN Tuesday, or enjoy LANs, 
            screenings, food courses, theater visits, game nights and much more when announced.
            <br/>
            It is known QN's meetings are hosted with plenty of cookies, so join the dark side of qulture! Contact:
            qulturattache@datasektionen.se, qulturnamnden@medieteknik.com.
        </p>
    );
}


function METAdorerna() {
    return(
        <p>
            METAdorerna (META doors) is the CS-Media committee that takes care of the Chapter Hall, META. If you do
            not know yet, it is at Osquars backe 21, 114 28 Stockholm, Sweden (or use this convenient 
            <a href="https://www.google.se/maps/place/META/@59.347854,18.0713357,19.33z/data=!4m6!3m5!1s0x465f9d8239dc3dc7:0x5339bd50f81e85b2!8m2!3d59.3480716!4d18.0713859!16s%2Fg%2F11tjpzdy84?entry=ttu">
                Google Maps link
            </a>). To help clean META, the committee asks for help on Mondays, and participating at least twice 
            lets you can attend a special party at the end of the year ;).
            <br/>
            Some useful links:
            <ul>
                <li>The <a href="https://datasektionen.se/en/clubs/metadorerna">METAdorerna page</a> on the CS chapter's
                website, with lots of info</li>
                <li>Contact: metadorerna@datasektionen.se</li>
            </ul>
        </p>
        
    );
}

function EqualityCommittee() {
    return (
        <p>
            The Equality Committee (Swedish: Jämlikhetsnämnden) is the committee that makes sure you feel safe and welcome
            in the chapter! They have a <a href="https://discord.gg/UjpGaB6Ckh">Discord server</a> if you are interested
            to work on equality issues. The server is where any information, including meeting information, is posted.
        </p>
    )
}

function MetaSpexet() {
    return (
        <p>
            MetaWhatagain? MetaSpexet! This committee is in charge of theatrical productions (spex) and is a joint committee
            between the CS and Media chapters. There are many groups inside MetaSpexet (thatrical production is vast).
            <br/>
            You might be interested to join them, or just to go watch their productions ;). Recruitement is every autumn.
            <br/>
            Contact:
            <ul>
                <li> <a href="https://metaspexet.se">Website link</a> (only in Swedish)</li>
                <li> <a href="https://www.facebook.com/metaspexet"> Facebook page</a></li>
                <li> <a href= "https://www.instagram.com/metaspexet/"> Instagram </a></li>
                <li> Or just go to META, you'll find the spex people easily, and they can tell you more about the 
                    committee.
                </li>
            </ul>
        </p>
    )
}

function DKM() {
    return (
        <p>
            DKM (standing for the Swedish 'Datas Klubbmästeri') is the pub committee on the CS chapter side (see MKM for Media). 
            The committee holds a CS pub each Wednesday at 17:17. There are some exceptional pub, including the famous 
            TentaPub, usually the first Saturday after each exam period. DKM and MKM propose both alcoholic 
            and <u>alcohol-free</u> beverages. Note that to enter an event by DKM, you must:
            <ul>
                <li>Present a valid identity document</li>
                <li>Show your mecenat card with the chapter's logo (see below)</li>
            </ul>
            This is required even if you won't drink alcohol, or if you want to go to META for something else during a pub.
            <br/>
            The mecenat card is the proof that you are a student, and the logo is obtained sometime after becoming a 
            member of THS.
            <br/>
            Contact:
            <ul>
                <li>Mail: dkm@datasektionen.se</li>
                <li><a href="https://www.facebook.com/datasklubbmasteri">Facebook page</a></li>
                <li><a href="https://www.instagram.com/dkmkth/">Instagram</a></li>
            </ul>
        </p>
    )
}

function MKM() {
    return (
        <p>
            MKM (standing for the Swedish 'Medias Klubbmästeri') is the pub committee on the Media chapter side 
            (see DKM for Media). The committee holds a Media pub each Thursday at 17:17. There are some 
            exceptional pub, including the famous TentaPub, usually the first Saturday after each exam period. 
            MKM and DKM propose both alcoholic and <u>alcohol-free</u> beverages. Note that to enter an event by 
            MKM, you must:
            <ul>
                <li>Present a valid identity document</li>
                <li>Show your mecenat card with the chapter's logo (see below)</li>
            </ul>
            This is required even if you won't drink alcohol, or if you want to go to META for something else during a pub.
            <br/>
            The mecenat card is the proof that you are a student, and the logo is obtained sometime after becoming a 
            member of THS.
        </p>
    )
}

export default Committees;