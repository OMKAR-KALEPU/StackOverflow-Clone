import React from 'react'

const WidgetTags = () => {
    const tags=['C','CSS','EXPRESS','FIREBASE','HTML','JAVA','JAVASCRIPT','MERN','MONGODB','MYSQL','NEXT.JS','NODE.JS','PHP','PYTHON']
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className="widget-tags-div">
            {
                tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags