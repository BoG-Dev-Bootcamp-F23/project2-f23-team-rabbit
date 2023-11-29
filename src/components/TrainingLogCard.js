export default function TrainingLogCard(props) {
    // const { date, title, description, hours, owner, breed, dogName } = props;
    const date = "2021/09/01";
    const title = "Test";
    const description = "Test";
    const hours = 1;
    const owner = "Test";
    const breed = "Test"; 
    const dogName = "Test";

    //date = "YYYY/MM/DD"
    let month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const year = date.substring(0, 4);

    switch(month) {
        case "01":
            month = "Jan";
            break;
        case "02":
            month = "Feb";
            break;
        case "03":
            month = "Mar";
            break;
        case "04":
            month = "Apr";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "Jun";
            break;
        case "07":
            month = "Jul";
            break;
        case "08":
            month = "Aug";
            break;
        case "09":
            month = "Sep";
            break;
        case "10":
            month = "Oct";
            break;
        case "11":
            month = "Nov";
            break;
        case "12":
            month = "Dec";
            break;
    }

    return (
        <div className="training-card-container">
            <div>
            <div className="training-card-date">
                <p>{day}</p>
                <p>{month} - {year}</p>
            </div>
            <div className="training-card-info">
                <h2>{title} <span>* {hours} hours</span></h2>
                <p>{owner} - {breed} - {dogName}</p>
                <p>{description}</p>
            </div>
            </div>
            <div className="training-card-edit-button">
                <img src="/images/trainingLogCardEditButton.png" alt="edit logo"/>
            </div>
        </div>
    );
}