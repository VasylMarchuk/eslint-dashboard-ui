import _ from 'lodash';
import Rule from './rule'

export default class Dashboard {

  constructor() {
  }

  async fetchData() {
    try {
      const response = await fetch("/eslintdata.json");
      return await response.json();
    } catch (error) {
      return console.log(error.message);
    }
  }
  prepareApp(){
    this.rootElement = document.createElement('div');
    this.rootElement.id = 'app';
    this.rootElement.className = '';

    this.appElement = document.createElement('div');
    this.appElement.className = 'grid grid-cols-2 gap-8 px-8 pt-12';
    this.rootElement.appendChild(this.appElement);

    document.body.appendChild(this.rootElement);
  }

  async render() {
    this.prepareApp()
    const rules = await this.fetchData();
    this.renderRules(rules);
  }

  renderRules(rules) {
    console.log(rules);

    const ruleData = {}

    for (let date in rules) {
      for (let ruleName in rules[date]) {
        let ruleFileNames = rules[date][ruleName]
        if (!ruleData.hasOwnProperty(ruleName)) ruleData[ruleName] = {}
        if (!ruleData[ruleName].hasOwnProperty('dates')) ruleData[ruleName].dates = []
        if (!ruleData[ruleName].hasOwnProperty('fileCount')) ruleData[ruleName].fileCount = []
        if (!ruleData[ruleName].hasOwnProperty('filePath')) ruleData[ruleName].filePath = []

        ruleData[ruleName].ruleName = ruleName
        ruleData[ruleName].dates.push(date)
        ruleData[ruleName].fileCount.push(rules[date][ruleName].length)
        ruleData[ruleName].filePath.push(rules[date][ruleName])
      }
    }
    for (let rule in ruleData) {
      new Rule().render(this.appElement, ruleData[rule], rules)
    }
  }
}
