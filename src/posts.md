---
layout: base
eleventyNavigation:
    key: Posts
    order: 2
---

# Posts

<ul>
{% for post in collections.post reversed %}
<li><a href="{{ post.url }}">{{ post.data.title }} - {{ post.date | publishedDateLocal }}</a></li>
{% endfor %}
</ul>
