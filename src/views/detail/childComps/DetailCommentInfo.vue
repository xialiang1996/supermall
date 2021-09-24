<template>
	<div class="comment"  v-if="commentInfo !== null && commentInfo.user !== undefined" >
		<div class="comment-top">
			<div class="title">用户评价</div>
			<div class="more">更多></div>
		</div>
		<div class="comment-user">
		    <img :src="commentInfo.user.avatar" alt="">
		    <span class="user-name">{{commentInfo.user.uname}}</span>
		</div>
		<div class="comment-content">
			<div class="user-content">
				{{commentInfo.content}}
			</div>
			<div>
				<span class="time">{{commentInfo.created}}</span>
				<span class="style">{{commentInfo.style}}</span>
			</div>
			<div class="info-imgs">
			    <img v-for="(item,index) in commentInfo.images" :src="item" :key="index">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailCommentInfo',
		props: {
			commentInfo: Object
		},
		created() {
			// console.log(this.commentInfo);
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.comment{
		padding: 5px 12px;
		.comment-top{
			height: 50px;
			line-height: 50px;
			border-bottom: 1px solid #ccc;
			.title{
				float: left;
			}
			.more{
				float: right;
			}
		}
		.comment-user{
			img{
				width: 42px;
				border-radius: 50%;
			}
		}
		.comment-content{
			.info-imgs{
				img{
					width: 100%;
				}
			}
		}
	}
</style>
