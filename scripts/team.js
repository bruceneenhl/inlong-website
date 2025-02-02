const process = require('process');
const fs = require('fs');
const axios = require('axios');

const folderName = './static/json/';
const contributorsFile = './static/json/contributors.json';
const docContributorsFile = './static/json/doc-contributors.json';

class Contributors {
  constructor(folderName, contributorsFile, docContributorsFile) {
    this.folderName = folderName;
    this.contributorsFile = contributorsFile;
    this.docContributorsFile = docContributorsFile;
  }

  async init() {
    try {
      console.log('start...');
      await this.getAllRepoData();
    } catch (err) {
      console.log(err);
      process.exit(1)
    }
  }

  async getAllRepoData() {
    await this.getContributors();
    await this.getDocContributors();
  }

  async writeFile(file, data) {
    try {
      if (!fs.existsSync(this.folderName)) {
        fs.mkdirSync(this.folderName)
        console.log('create folder');
      }
      const jsonString = JSON.stringify(data);
      fs.writeFileSync(file, jsonString);
      console.log('write success');
    } catch (err) {
      console.error(err)
    }
  }

  async getContributors (page= 1, per_page= 100, extraContributors = [], list = []) {
    await axios.get(`https://api.github.com/repos/apache/inlong/contributors?page=${page}&per_page=${per_page}`).then(result =>{
      let data = result.data;
      list.push(...data);
      if(data.length === per_page) {
        page++;
        this.getContributors(page, per_page, extraContributors, list);
      }else {
        const repoContributors = [...list, ...extraContributors];
        this.writeFile(this.contributorsFile, repoContributors);
        console.log('writing to contributors succeeded');
      }
    });
  }

  async getDocContributors (page= 1, per_page= 100, extraContributors = [], list = []) {
    await axios.get(`https://api.github.com/repos/apache/inlong-website/contributors?page=${page}&per_page=${per_page}`).then(result =>{
      let data = result.data;
      list.push(...data);
      if(data.length === per_page) {
        page++;
        this.getDocContributors(page, per_page, extraContributors, list);
      }else {
        const repoContributors = [...list, ...extraContributors];
        this.writeFile(this.docContributorsFile, repoContributors);
        console.log('writing to doc contributors succeeded');
      }
    });
  }

}

new Contributors(folderName, contributorsFile, docContributorsFile).init()

