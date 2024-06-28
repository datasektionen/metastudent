const Committees = () => {
    return (
        <div className="committees">
            <ChapterBelonging belonging="CS-Media committees"/>
            <div className="committee-info">
                <CommitteeName name="International Committee" />
                <InternationalCommittee />
            </div>

            <ChapterBelonging belonging="CS committees"/>

            <ChapterBelonging belonging="Media committees"/>
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

export default Committees;