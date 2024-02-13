const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    const completeCheck = (completed) => {
      if (completed){
          return (
              <p style={{display: "inline"}}>&#9989;</p>
          )
      }
      else {
          return (
              <p style={{display: "inline"}}>&#10060;</p>
          )
      }
    }

    return (
        <div>
            <hr/>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completeCheck(completed)}</div>
        </div>
    );
};

export {Todo};