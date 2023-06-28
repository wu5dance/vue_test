<template>
    <el-container>
        <el-header>
            <el-row type="flex" justify="space-between" class="content">
                <el-col :span="8">
                    <div class="grid-content">
                        <i class="el-icon-phone"></i>
                        <span>客服热线：400-8888-8888</span>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content userIndex">
                        <div class="user">你好，
                            <el-dropdown>
                                <span class="el-dropdown-link">
                                    15656955775<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>修改密码</el-dropdown-item>
                                    <el-dropdown-item>退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div>
                            <el-link type="info" href="#" :underline="false">新手教程</el-link>
                            <span class="line">|</span>
                            <el-link type="info" href="#" :underline="false">常见问题</el-link>
                            <span class="line">|</span>
                            <el-link type="info" href="#" :underline="false">意见反馈</el-link>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="borderBottom"></div>
            <el-row type="flex" justify="space-between" align="middle" class="content">
                <el-col :span="16">
                    <div class="grid-content logo">LOGO</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content linkList">
                        <el-link type="info" href="#" :underline="false" class="homePage">企业首页</el-link>
                        <el-link type="info" href="#" :underline="false" class="accountSetting">账号设置</el-link>
                        <el-link type="info" href="#" :underline="false" class="message">消息</el-link>
                        <el-dropdown>
                            <i class="el-icon-s-home"></i>
                            <span class="el-dropdown-link bussinessUser">
                                企业用户<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                        </el-dropdown>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="main">
            <el-row class="content tabAside">
                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane label="企业首页">企业首页</el-tab-pane>
                    <el-tab-pane label="云卷申领" class="el-icon-magic-stick">
                        云卷申领
                    </el-tab-pane>
                    <el-tab-pane label="订单中心">订单中心</el-tab-pane>
                    <el-tab-pane label="申请服务机构">申请服务机构</el-tab-pane>
                    <el-tab-pane label="客服中心">
                        <div class="tabPaneContent">
                            <el-page-header @back="goBack" title="我的服务记录" class="backInfo">
                            </el-page-header>
                            <h4>投诉建议</h4>
                            <el-alert class="noticeInfo" title="欢迎反馈问题，您的意见与建议就是我们的动力! 我们会认真查阅您反馈的每一个问题，并尽快给您答复!"
                                type="info">
                            </el-alert>
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"
                                class="demo-ruleForm">
                                <el-form-item label="投诉或建议内容" prop="content">
                                    <el-input class="inputLen" type="textarea" v-model="ruleForm.content" :rows="6"></el-input>
                                </el-form-item>
                                <el-form-item label="添加图片">
                                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                                        :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item label="联系人" prop="username">
                                    <el-input class="inputLen" v-model="ruleForm.username"></el-input>
                                </el-form-item>
                                <el-form-item label="联系方式" prop="phoneNumber">
                                    <el-input class="inputLen" v-model="ruleForm.phoneNumber"></el-input>
                                </el-form-item>
                                <el-form-item class="btnList">
                                    <el-button @click="resetForm('ruleForm')" class="btn">取消</el-button>
                                    <el-button type="primary" @click="submitForm('ruleForm')" class="btn">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </el-main>
        <el-footer>
            <el-row class="content" type="flex" justify="space-between">
                <el-col :span="8">
                    <div class="grid-content pro">
                        <div class="myIcon"></div>
                        <div class="footerIntro">
                            <h4>商家资质认证</h4>
                            <p>严格筛选服务商，提供品质服务</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content pro">
                        <div class="myIcon"></div>
                        <div class="footerIntro">
                            <h4>商家资质认证</h4>
                            <p>严格筛选服务商，提供品质服务</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content pro">
                        <div class="myIcon"></div>
                        <div class="footerIntro">
                            <h4>商家资质认证</h4>
                            <p>严格筛选服务商，提供品质服务</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="borderBottom content"></div>
            <el-row class="content">
                <el-col :span="8">
                    <div class="footerList">
                        <div class="footerItem">
                            <h5>关于平台</h5>
                            <ul class="footerItemCon">
                                <li>关于我们</li>
                                <li>平台特色</li>
                                <li>法律声明</li>
                                <li>联系方式</li>
                            </ul>
                        </div>
                        <div class="footerItem">
                            <h5>关于平台</h5>
                            <ul class="footerItemCon">
                                <li>关于我们</li>
                                <li>平台特色</li>
                                <li>法律声明</li>
                                <li>联系方式</li>
                            </ul>
                        </div>
                        <div class="footerItem">
                            <h5>关于平台</h5>
                            <ul class="footerItemCon">
                                <li>关于我们</li>
                                <li>平台特色</li>
                                <li>法律声明</li>
                                <li>联系方式</li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content contact">
                        <div class="myIcon"></div>
                        <div class="footerIntro">
                            <h4>商家资质认证</h4>
                            <p>严格筛选服务商，提供品质服务</p>
                        </div>
                    </div>
                    <div class="grid-content contact">
                        <div class="myIcon"></div>
                        <div class="footerIntro">
                            <h4>商家资质认证</h4>
                            <p>严格筛选服务商，提供品质服务</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="erweimaList">
                    <div class="erweima"></div>
                    <div class="erweima"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" class="copyright">
                    <p>皖公网安备 50019002500154号 皖ICP备10202274-4号 经营许可证:皖B2-2016034</p>
                    <p>Copyright 2020 Venus (合肥微青罗网络科技有限公司) 版权所有</p>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'Service',
    data() {
        return {
            tabPosition: 'left',
            // 表单
            ruleForm: {
                content: '',
                username: '',
                phoneNumber: '',
            },
            rules: {
                content: [
                    { required: true, message: '请输入内容', trigger: 'blur' },
                ],
                username: [
                    { required: true, message: '请输入内容', trigger: 'blur' },
                ],
                phoneNumber: [
                    { required: true, message: '请输入内容', trigger: 'blur' },
                ],
            },
            // 上传图片
            dialogImageUrl: '',
            dialogVisible: false,
        }
    },
    methods: {
        // 页头
        goBack() {
            console.log('go back');
        },
        // 上传图片
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    },
    // 表单提交按钮
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    }

}
</script>

<style scoped lang="less">
.content {
    width: 70%;
    margin: 10px auto;
}

/* header */
.el-header {
    height: auto !important;
}

.borderBottom {
    border-bottom: 1px solid #909399;
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.grid-content {
    min-height: 36px;
    display: flex;
    align-items: center;
}

.linkList {
    display: flex;
    justify-content: space-between;

    .homePage {
        color: rgb(38, 149, 229);
    }

    .accountSetting,
    .message,
    .bussinessUser {
        color: black;
    }

}

// 
.userIndex {
    display: flex;
    justify-content: end;

    .user {
        margin-right: 10px;
    }

    .line {
        margin: 0 10px;
        color: #909399;
    }
}

/* 下拉菜单 */
.el-dropdown-link {
    cursor: pointer;

    /* color: #409EFF; */
    .el-icon-arrow-down {
        font-size: 12px;
    }
}



.logo {
    width: 200px;
    height: 100px;
    background-color: #909399;
}

.main {
    background-color: #eeeff0;
    margin: 20px;

    .tabAside {
        margin-top: -20px;

        .tabPaneContent {
            padding: 10px 30px;
            margin: auto;

            .backInfo {
                padding: 10px;
            }

            h4 {
                font-size: 16px;
                font-weight: 700;
                padding-bottom: 10px;
                margin: 10px;
            }

            /* 通知信息 */
            .noticeInfo {
                background-color: #409eff38;
                width: 100%;
                margin: 10px auto;
            }

            /* 提交按钮 */
            .btnList {
                display: flex;
                justify-content: center;
            }

            .btn {
                width: 150px;
            }
            .inputLen{
                width: 50%;
            }
        }
    }

}

/deep/.el-tabs__header {
    /* margin-top: -20px; */
    background-color: white;
}

/deep/.el-tabs__content {
    margin-top: 20px;
    background-color: white;
}


/* 页头 */
/deep/.el-page-header__left::after {
    width: 0px;
}





/* 上传图片 */
/deep/.el-upload__input {
    display: none;
}



/* footer */
.myIcon {
    width: 60px;
    height: 60px;
    background-color: #909399;
}

.pro {
    /* padding: 0 10px; */

}

.footerIntro {
    padding: 10px;
}

.footerIntro h4 {
    font-size: 18px;
    font-weight: 700;
}

li {
    list-style-type: none;
}

.footerList {
    display: flex;
    justify-content: space-between;

    .footerItem {
        h5 {
            font-weight: 600;
        }

        .footerItemCon {
            padding: 0;
            font-size: 12px;
            color: #909399;
            line-height: 25px;
        }
    }
}

.contact {
    display: flex;
    justify-content: end;
}

.erweimaList {
    display: flex;
    justify-content: end;

    padding-left: 70px;

    .erweima {
        width: 100px;
        height: 100px;
        background-color: #909399;
        margin: 10px;
    }
}

.copyright {
    p {
        color: #909399;
        text-align: center;
        font-size: 9px;
    }
}

/deep/.el-tabs--left .el-tabs__item.is-left{
    text-align: left;
}
</style>