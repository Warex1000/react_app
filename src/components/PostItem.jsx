import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const PostItem = (props) => {

    return(
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Удалить пост</Button>
                </Stack>
            </div>
        </div>
    );
};

export default PostItem;






// import React from "react";
//
// const PostItem = (props) => {
//
//     return(
//         <div className="post">
//             <div className="post__content">
//                 <strong>{props.post.id}. {props.post.title}</strong>
//                 <div>
//                     {props.post.body}
//                 </div>
//             </div>
//             <div className="post__btns">
//                 <button> Удалить пост</button>
//             </div>
//         </div>
//     );
//
// };
//
// export default PostItem;