import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, url, imageUrl, publishedAt, source } = this.props;
        return (
            <div>
                <div class="card">
                    <img src={imageUrl} class="card-img-top" alt="Fissure in Sandstone" />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5><span class="badge rounded-pill badge-primary">{source}</span>
                        <p class="card-text">{description}</p>
                        <a href={url} target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                    <div class="card-footer text-muted">{publishedAt}</div>
                </div>
            </div>
        )
    }
}
