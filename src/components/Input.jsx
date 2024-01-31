export default Input({type, ...props}){
    return
    <div className="input-group mb-3">
        <label for="basic-url" class="form-label">Your email</label>
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <span class="input-group-text" id="basic-addon2">@example.com </span>             
</div>
    
}