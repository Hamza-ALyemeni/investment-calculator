export default function Form(){
    return (
        <div id="user-input">
            <div className="input-group" id="user-input">
                <label htmlFor="">Initial Investment</label>
                <input type="number" />
                <label htmlFor="">Annual Investment</label>
                <input type="number" />
            </div>
            <div className="input-group" id="user-input">
                <label htmlFor="">Expected Return</label>
                <input type="text" />
                <label htmlFor="">duration</label>
                <input type="text" />
            </div>
        </div>
    )
}