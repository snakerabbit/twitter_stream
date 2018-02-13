import React from 'react';

class CommentForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = { author: ``, text:`` };
   this.handleAuthorChange = this.handleAuthorChange.bind(this);
   this.handleTextChange = this.handleTextChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleAuthorChange(e) {
   this.setState({ author: e.target.value });
 }

 handleTextChange(e) {
   this.setState({ text: e.target.value });
 }

 handleSubmit(e) {
   e.preventDefault();
   let author = this.state.author.trim();
   let text = this.state.author.trim();
   if(!text || !author) {
     return;
   }
   this.props.onCommentSubmit({
     author: author,
     text: text
   });
   this.setState({
     author: '',
     text:''
   });
 }

 render() {
   return (
     <form onSubmit={ this.handleSubmit }>
       <input
       type='text'
       placeholder='Your name…'
       value={ this.state.author }
       onChange={ this.handleAuthorChange } />
       <input
       type='text'
       placeholder='say something...'
       value={ this.state.text }
       onChange={ this.handleTextChange } />
       <input
       type='submit'
       value='Post' />
     </form>
   );
 }
}
export default CommentForm;
