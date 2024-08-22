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

                <CommitteeName name={"TagMonkeys"}/>
                <TagMonkeys/>

                <CommitteeName name={"Ada"}/>
                <Ada/>

                <CommitteeName name={"Datasladden"}/>
                <Datasladden/>

                <CommitteeName name={"DEMON (Data Et Medias OrquesterNämnd)"}/>
                <DEMON/>

                <CommitteeName name={"DESC (Datas E-Sports Commmunity"}/>
                <DESC/>

                <CommitteeName name={"dJulkalendern"}/>
                <DJulkalendern/>

                <CommitteeName name={"dÅre"}/>
                <DAre/>

                <CommitteeName name={"Election Committee"}/>
                <ElectionCommittee/>

                <CommitteeName name={"GUDAR"}/>
                <GUDAR/>

                <CommitteeName name={"Project Pride"}/>
                <ProjectPride/>
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
            Science and Media Technology chapters. The committee also provides a platform for Swedish students.
            The committee is open to any META student, whether from CS or Media, international or Swedish.
            We often have collaborations with other committees.
            <br/>
            Our usual meeting time is 12:15 on Mondays. You can talk to us on
            our <a href="https://dsekt.se/whatsapp">WhatsApp group</a> to get more info and talk to international
            students.
            <br/>
            Oh, also, we are the ones maintaining this website ;).
        </p>
    )
}

function QultureCommittee() {
    return(
        <p>
            The Qulture Committee (Swedish: Qulturnämnden, QN) is the committee focusing on <i>qulture</i> events (yes,
            with a q!). Come past 17:17 in META every Tuesday to play board games at what is called QN Tuesday, or enjoy LANs, 
            screenings, food courses, theater visits, game nights and much more when announced (rarely).
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
            not know yet, it is located at Osquars backe 21, 114 28 Stockholm, Sweden (or use this convenient 
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
            between the CS and Media chapters. There are many groups inside MetaSpexet (theatrical production is vast).
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
            The committee holds a CS pub each Wednesday at 17:17. There are some exceptional pubs, including the famous 
            TentaPub, usually the first Saturday after each exam period. DKM and MKM propose both alcoholic 
            and <u>alcohol-free</u> beverages. Note that to enter an event by DKM, you must:
            <ul>
                <li>Present a valid identity document</li>
                <li>Show your Mecenat card with the chapter's logo (see below)</li>
            </ul>
            This is required even if you won't drink alcohol, or if you want to go to META for something else during a pub.
            <br/>
            The Mecenat card is the proof that you are a student, and the logo is obtained sometime after becoming a 
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
            exceptional pubs, including the famous TentaPub, usually the first Saturday after each exam period. 
            MKM and DKM serve both alcoholic and <u>alcohol-free</u> beverages. Note that to enter an event by 
            MKM, you must:
            <ul>
                <li>Present a valid identity document</li>
                <li>Show your Mecenat card with the chapter's logo (see below)</li>
            </ul>
            This is required even if you won't drink alcohol, or if you want to go to META for something else during a pub.
            <br/>
            The Mecenat card is the proof that you are a student, and the logo is obtained sometime after becoming a 
            member of THS.
        </p>
    )
}


function TagMonkeys() {
    return (
        <p>
            Tag Monkeys is the art and creativity committee of the CS chapter. Some events by TagMonkeys 
            include photography walks, pumpkin carving, perler beading, etc. Some of their work can be seen 
            displayed in META, the chapter hall.
            <br/>
            You can see what they do and check some events on their 
            <a href="https://www.facebook.com/pages/Tag-Monkeys/120626214692945?fref=ts"> Facebook page</a>. 
            Otherwise, you can contact them on META's Slack.
        </p>
    )
}

function Ada() {
    return (
        <p>
            Ada (in honour of <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">Ada Lovelace</a>) is the committee 
            dedicated to women and non-binary persons in the chapter. Part of their goal is to establish spaces 
            for the aforementioned persons, so that they can meet each other. Their events are primarily for women and 
            non-binary persons, inlcuding gasques, pubs, etc.
            <br/>
            Contact:
            <ul>
                <li>Mail (head of committee): ada-ordf@datasektionen.se</li>
                <li><a href="https://www.facebook.com/ADAKTH">Facebook page</a></li>
            </ul>
        </p>
    )
}

function Datasladden() {
    return (
        <p>
            Did you know the CS chapters has cars? Yes, not one, but 2! The historical car, CERISE (we named all 
            chapter's cars after the chapter's colour), and the newer, electric car Lusen. Datsladden is the committee 
            that takes care of both vehicles and their respective log books. The cars are often used by committees (e.g. 
            to buy ingredients for gasques), and can be lent for free to committees and chapter members, by contacting 
            Mulle (a.k.a. Mullerina Schmeck) at mulle@datasektionen.se and by booking the car on the 
            <a href="https://bokning.datasektionen.se/"> chapter's booking website</a> (only in Swedish).
            <br/>
            There are guides about how to use the cars, but they are only in Swedish. Ask details to the mail 
            address above. You can also book car drivers if you can't drive yourself ;).
        </p>
    )
}

function DEMON() {
    return (
        <p>
            Interested in music? DEMON (Swedish for 'CS and Media's orchestra club') is the joined committee 
            for music. They do not have a fixed repetition place, but can often be found at Hötorget. 
            There instruments can be freely borrowed, including a few guitars, a digital drum set and a digital 
            piano. The head of committee is the ÄrkeDEMON (mail: arkedemon@datasektionen.se).
            <br/>
            To get in the committee, try asking people in META to get access to their Slack.
        </p>
    )
}

function DESC() {
    return (
        <p>
            DESC (Swedish for 'CS e-sport community') is the committee to look for if you are into gaming. They 
            organize tournaments in META, gaming nights, speed runs, e-sport events watching sessions, etc. One of 
            their goal is that chapter members play together.
            <br/>
            There is no "specific" membership, you are part of DESC as long as you are part of the chapter.
            <br/>
            Contacts:
            <ul>
                <li>Mail: desctop@datasektionen.se (Desctop is their title of head of committee)</li>
                <li><a href="https://discord.gg/xwjCxXkmFM">Dicord server</a></li>
                <li><a href="https://www.facebook.com/groups/447431545372957">Facebook page</a></li>
            </ul>
        </p>
    )
}

// Required capital D so React can tell it is a React component
function DJulkalendern() {
    return (
        <p>
            Mom, can we have an advent calender committee <s>at home</s> in META? No, we already have dJulkalendern in META.
            <br/>
            dJulkandern proposes a challenge each Sunday of December before christmas eve! Release time is 12:15 Swedish time
            on <a href="https://djulkalendern.se/">their website</a>. Everyone will try to clear them as fast as possible ;).
            <br/>
            Contacts:
            <ul>
                <li>Mail: djul@datasektionen.se</li>
                <li><a href="https://dsekt.se/djul">Dicord server</a></li>
            </ul>
        </p>
    )
}

function DAre() {
    return (
        <p>
            Want to go skiing? dÅre is the committee that organizes the yearly trip to the ski village Åre. You can contact them at
            dare@datasektionen.se.
        </p>
    )
}

function ElectionCommittee() {
    return (
        <p>
            An election committee? What do they do, organize elections? Exactly! Composed of 6 committee members and the Chairperson,
            the Election Comittee (Swedish: Valberedningen) manages elections inside the chapter, and also organize the chapter fair once per year.
            <br/>
            Elections oversimplified:
            <ol>
                <li>The Election Committee opens nominations for posts</li>
                <li>Nominated persons accept or decline</li>
                <li>Those who accepted pass an interview</li>
                <li>The committee make a review, stating whether the candidates are suitable for the post or not</li>
                <li>The Chapter Meeting, taking the committee's review into account, makes a choice between the candidates</li>
            </ol>
            The Chapter Fair (Swedish: Sektionsmässan) is a semester-based event where committees and projects, along with chapter officials,
            present their activities to the chapter members.
            <br/>
            Contact:
            <ul>
                <li>Mail (head of committee): valberedning-ordf@datasektionen.se</li>
                <li>Mail (rest of the committee): valberedare@datasektionen.se</li>
            </ul>
        </p>
    )
}

function GUDAR() {
    return (
        <p>
            The CS chapter is quite old, having been founded in October 1983, so it has a long history. GUDAR is a committee founded in Spring 2024
            to safekeep and rediscover said history. You can contact the chapter's historian (mail below) if you want to know more about the
            chapter's history, or if you would like to join GUDAR.
            <br/>
            Contact:
            <ul>
                <li>Chapter's historian: historiker@datasektionen.se</li>
                <li>General email: gudar@datasektionen.se</li>
            </ul>
        </p>
    )
}

function ProjectPride() {
    return (
        <p>
            The CS chapter participates in the yearly <a href="https://www.stockholmpride.org/en/">Stockholm Pride</a> that occurs in late July to
            early August. Project Pride is the committee that organizes this. You will learn more by announcements on the chapter's Discord server.
            <br/>
            Contact:
            <ul>
                <li>Mail: pride@datasektionen.se</li>
            </ul>
        </p>
    )
}

export default Committees;
