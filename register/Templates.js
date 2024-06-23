export function participantTemplate(count)
{
    const participantTemplate = 
    `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" value="" required="" fdprocessedid="s8i1x">
        </div>
        <div class="item activities">
            <label for="activity">Activity #<span>*</span></label>
            <input id="activity" type="text" name="activity" fdprocessedid="20owzb">
        </div>
        <div class="item">
            <label for="fee">Fee ($)<span>*</span></label>
            <input id="fee" type="number" name="fee" fdprocessedid="p035tr">
        </div>
        <div class="item">
            <label for="date">Desired Date <span>*</span></label>
            <input id="date" type="date" name="date">
        </div>
        <div class="item">
            <p>Grade</p>
            <select fdprocessedid="0m0g5n">
                <option selected="" value="" disabled=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    </section>
    ` 
    return participantTemplate;
}

export function successTemplate(info)
{
    const success = 
    `
    Thank you ${info.name.value} for registering. You have registered ${info.count.value} participants and owe $${info.fee} in Fees.
    `
    return success;
}