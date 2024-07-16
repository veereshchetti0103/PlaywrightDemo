import testDataJson from '../../utils/Web/TestData.json';

export class TestData {
  public getTestData(name: string, field: string) {
    return testDataJson[name][field];
  }
}

export default new TestData();
