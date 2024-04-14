export default function Form(){
    return (
        <div id="user-input">
            <div className="input-group">
                <label htmlFor="">Initial Investment</label>
                <input type="number" />
                <label htmlFor="">Annual Investment</label>
                <input type="number" />
            </div> 
            <div className="input-group">
                <label htmlFor="">Expected Return</label>
                <input type="text" />
                <label htmlFor="">duration</label>
                <input type="text" />
            </div>
        </div>
    )
}