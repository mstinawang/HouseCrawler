package test;

/**
 * ��˵����<br/>
 * �ļ����ƣ�Test.java<br/>
 * ��·����test<br/>
 * ��Ŀ���ƣ��ຣ��ͨͳ��<br/>
 * ��Ȩ��Ϣ�����Ǽ���������ϵͳ���޹�˾ (c) 2010-2015<br/>
 * 
 * @Author tiantian
 * @Version 1.0.0
 * @Date 2016-5-24-����10:19:36
 * @Note Commit Info��<br/>
 *       $Id$<br/>
 *       $Revision$<br/>
 *       $Date$<br/>
 *       $Author$<br/>
 */
public class Test {
	private final static  int  PAGE_SIZE=1000;
	
	public static void runCrawler(){
		for(int i=1;i<PAGE_SIZE;i=i+10){
			Runnable r=new TestCrawler(i,i+10);
			Thread t=new Thread(r);
			t.start();
		}
		
		
		
	}
	public static void main(String[] args){
		Test.runCrawler();
	}
	

}
